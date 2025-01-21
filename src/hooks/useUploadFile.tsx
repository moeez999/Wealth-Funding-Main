import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useUploadFile() {
  return useMutation({
    mutationFn: async (data) => {
      return await axios.post(
        "http://localhost:4000/api/files//upload-multiple",
        data
      );
    },
  });
}