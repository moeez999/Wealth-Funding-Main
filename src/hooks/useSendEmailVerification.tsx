import axios from "axios";

const useSendEmailVerification = async (id, firstname, lastname) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/email/send-html`,
      {
        to:localStorage.getItem("email_verification"),
        subject:"WEALTH FUND identity verification",
        id:id,
        firstname: firstname,
        lastname: lastname
      }
    );

    
    return response; // Retourne les données des ordres
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error; // Relance l'erreur pour une gestion en amont
  }
};

export default useSendEmailVerification;