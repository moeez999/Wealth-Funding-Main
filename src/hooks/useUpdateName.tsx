import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useUpdateName() {
  return useMutation({
    mutationFn: async (data) => {
      return await axios.post(
        "http://localhost:4000/api/users/update-personnal-info",
        data
      );
    },
  });
}