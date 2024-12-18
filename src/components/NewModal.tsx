import {
  Modal,
  Box,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface NewModalProps {
  handleClose: () => void;
  open: boolean;
}
const options: { label: string; value: string }[] = [
  { label: "Select a date", value: "" },
  { label: "22", value: "english" },
  { label: "23", value: "spanish" },
  { label: "25", value: "french" },
];
const NewModal: React.FC<NewModalProps> = ({ handleClose, open }) => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  // };
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
              New
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

          <div className="font-[Montserrat] font-medium text-lg text-black">
            User
          </div>

          <FormControl fullWidth>
            <InputLabel sx={{ textAlign: "center", mb: 10 }}>User</InputLabel>
            <Select
              IconComponent={() => (
                <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
              )}
              // name={name}
              // value={value}
              // onChange={onChange}
              displayEmpty
              sx={{
                backgroundColor: "#ffffff",
                // height: 36,

                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#00BE64",
                },
                "& .MuiSelect-icon": {
                  fontSize: 32,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  sx={{
                    backgroundColor: "#ffffff",
                    height: 36,

                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSelect-icon": {
                      fontSize: 32,
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="font-[Montserrat] font-medium text-lg text-black">
            Plan
          </div>
          <FormControl fullWidth>
            <InputLabel sx={{ textAlign: "center", mb: 10 }}>Plan</InputLabel>
            <Select
              IconComponent={() => (
                <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
              )}
              // name={name}
              // value={value}
              // onChange={onChange}
              displayEmpty
              sx={{
                backgroundColor: "#ffffff",
                // height: 36,

                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#00BE64",
                },
                "& .MuiSelect-icon": {
                  fontSize: 32,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  sx={{
                    backgroundColor: "#ffffff",
                    height: 36,

                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSelect-icon": {
                      fontSize: 32,
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="flex flex-row items-center justify-end gap-3 mt-6">
            <button className="font-normal text-sm font-[Montserrat] bg-[#00BE64] text-white cursor-pointer  p-[0.5rem] rounded-[4px]">
              Submit
            </button>
            <button
              className="font-normal text-sm font-[Montserrat] bg-white text-[#00BE64] cursor-pointer  p-[0.5rem] rounded-[4px]"
              style={{ border: "1px solid #00BE64" }}
            >
              Reset
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NewModal;
