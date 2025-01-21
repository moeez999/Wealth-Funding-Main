import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchUser(id) {
  return useQuery({
    queryKey: ["fetchUser",id], // Dépend de l'offset
    queryFn: async () => {
      const response = await axios.post("http://localhost:4000/api/users/find-one/"+id); // Faites une requête GET à l'API
      return response.data; // Retournez uniquement les données utiles
    },
  });
}
