import { useEffect, useState } from "react";
import { api } from "../../service/api";

export function useCatalog() {
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/coffees")
      .then((response) => {
        setCoffees(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { coffees, isLoading };
}
