import { FC } from "react";
import { useJsonFetch } from "../hooks/useJsonFetch"

export const Error: FC = () => {
  const { error } = useJsonFetch(`http://localhost:7070/error`);

  return (
    <div>
      <h2>Error:</h2>
      <span>{error}</span>
    </div>
  );
};
