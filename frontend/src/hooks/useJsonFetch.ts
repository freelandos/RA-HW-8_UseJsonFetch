import { useEffect, useState } from "react";

export const useJsonFetch = (url: string, opts: object = {}) => {
  const [data, setData] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, opts);

      if (!response.ok) {
        setError(response.statusText);
        return;
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};
