import { FC } from "react";
import { useJsonFetch } from "../hooks/useJsonFetch";

export const Loading: FC = () => {
  const { data, loading } = useJsonFetch(`http://localhost:7070/loading`);

  return (
    <div>
      <h2>Loading:</h2>
      { loading
          ? <span>Loading...</span>
          : <p>{JSON.stringify(data)}</p>
      }
    </div>
  );
};
