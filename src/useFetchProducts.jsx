import { useEffect, useState } from "react";

export default function useFetchProducts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
