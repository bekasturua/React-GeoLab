import { useEffect, useState } from "react";
import ApiRequest from "../ApiRequest";

export default function useRequest(method, endpoint, params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiRequest(method, endpoint, params)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return [data];
}
