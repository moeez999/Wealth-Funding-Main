import React, { useState, useEffect } from "react";
import logo from '../assets/images/auth/logo.png'; // Assurez-vous que le logo est importé correctement
import useSendEmailVerification from "../hooks/useSendEmailVerification";

const IdentityVerification = () => {
  const [isResent, setIsResent] = useState(false);
  const [countdown, setCountdown] = useState(30); // Initialisation à 0, pas de countdown initialement
  const [error, setError] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(true); // Pour savoir si le bouton a été cliqué
  const data=localStorage.getItem("resend_verification")?.split(",");
 
  // Démarrer le compte à rebours une fois que le bouton est cliqué
  useEffect(() => {
    let timer;
    if (isButtonClicked && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    // Arrêter le timer quand le compte à rebours atteint 0
    if (countdown === 0) {
      clearInterval(timer);
      setIsResent(false); // Indiquer que le lien a été renvoyé
      setIsButtonClicked(false); // Marquer que le bouton a été cliqué
    }

    return () => clearInterval(timer); // Nettoyage lorsque le composant est démonté
  }, [countdown, isButtonClicked]);

  const handleResendLink = () => {
    // Logique pour renvoyer le lien de vérification
    useSendEmailVerification(data[0],data[1],data[2]);
    setIsResent(true); // Indiquer que le lien a été renvoyé
    setIsButtonClicked(true); // Marquer que le bouton a été cliqué
    setCountdown(30); // Réinitialiser le compte à rebours à 60 secondes
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Logo au dessus */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Wealth Funded Logo" className="w-24 h-24" /> {/* Redimensionner le logo si nécessaire */}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[#1DBF73]">Identity Verification</h2>
        <p className="text-center mb-6 text-gray-700">
          A verification link has been sent to your email address. Please check your inbox and click the link to verify your identity.
        </p>

        <div className="text-center">
          <button
            className="px-6 py-3 bg-[#1DBF73] text-white rounded-lg focus:outline-none hover:bg-[#1a9f5d]"
            onClick={handleResendLink}
            disabled={isResent || countdown > 0} // Désactive le bouton pendant le compte à rebours
          >
            {countdown > 0
              ? `Resend Link in ${countdown}s`
              : "Resend Verification Link"}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default IdentityVerification;
