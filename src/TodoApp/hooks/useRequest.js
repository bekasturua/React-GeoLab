import { useEffect, useState } from "react";
import ApiRequest from "../ApiRequest";

export default function useRequest(method, endpoint) {
  const [data, setData] = useState();

  useEffect(() => {
    ApiRequest("GET", "tasks")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return data;
}
