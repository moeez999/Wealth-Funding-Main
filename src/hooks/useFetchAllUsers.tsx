import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchAllUsers(offset) {
  return useQuery({
    queryKey: ["fetchAllUsers", offset], // Dépend de l'offset
    queryFn: async () => {
      const response = await axios.post("http://localhost:4000/api/users/get-all-users?offset="+offset); // Faites une requête GET à l'API
      return response.data; // Retournez uniquement les données utiles
    },
  });
}
