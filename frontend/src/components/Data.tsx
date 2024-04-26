import { FC } from "react";
import { useJsonFetch } from "../hooks/useJsonFetch";

export const Data: FC = () => {
  const { data } = useJsonFetch(`http://localhost:7070/data`);

  return (
    <div>
      <h2>Data:</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
