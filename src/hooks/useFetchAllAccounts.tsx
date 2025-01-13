import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchAllAccounts(offset) {
  return useQuery({
    queryKey: ["fetchAllUsers", offset], // Dépend de l'offset
    queryFn: async () => {
      const response = await axios.post("http://localhost:4000/api/accounts/get-all-accounts-for-brand",
      {
        "limit":5,
        "offset":offset
    }); // Faites une requête GET à l'API
      return response.data; // Retournez uniquement les données utiles
    },
  });
}
