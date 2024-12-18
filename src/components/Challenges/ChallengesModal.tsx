import { Modal, Box, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import React, { useState } from "react";

interface EditModalProps {
  handleClose: () => void;
  open: boolean;
}

interface FormData {
  price1: string;
  price2: string;
  price3: string;
  price4: string;
  price5: string;
}

const initialFormData: FormData = {
  price1: "",
  price2: "",
  price3: "",
  price4: "",
  price5: "",
};

const EditChallengeModal: React.FC<EditModalProps> = ({
  handleClose,
  open,
}) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            width: { xs: 300, sm: 500, lg: 600 },
            p: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <div className="flex justify-between items-center mt-4">
            <div className="font-[Montserrat] text-[34px] font-semibold mb-6">
              Edit
            </div>
            <div className="flex flex-row items-center gap-1 sm:gap-3">
              <IconButton>
                <RemoveIcon sx={{ color: "#00BE64" }} />
              </IconButton>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ color: "#00BE64" }} />
              </IconButton>
              <IconButton>
                <FullscreenIcon sx={{ color: "#00BE64" }} />
              </IconButton>
            </div>
          </div>
          <form
            className="bg-white shadow-md rounded px-2 sm:px-4 xl:px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="price1"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Price 1
              </label>
              <input
                type="text"
                name="price1"
                id="price1"
                value={formData.price1}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00BE64]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price1"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Price 2
              </label>
              <input
                type="text"
                name="price2"
                id="price2"
                value={formData.price2}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00BE64]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price3"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Price 3
              </label>
              <input
                type="text"
                name="price3"
                id="price3"
                value={formData.price3}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00BE64]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price3"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Price 4
              </label>
              <input
                type="text"
                name="price4"
                id="price4"
                value={formData.price4}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00BE64]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price3"
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                Price 5
              </label>
              <input
                type="text"
                name="price5"
                id="price5"
                value={formData.price5}
                onChange={handleChange}
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00BE64]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#00BE64] hover:bg-purple-600 font-[Montserrat] text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditChallengeModal;
