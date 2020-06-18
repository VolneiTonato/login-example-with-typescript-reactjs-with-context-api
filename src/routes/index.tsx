import React from "react";
import { useUserContext } from "../context/userContext";

const Router: React.FC = () => {
  const { data, signing, signed, signingOut } = useUserContext();

  if (data.signedLoading) return <h1>Carregando...</h1>;

  if (signed)
    return (
      <>
        <h1>Bem vindo {data.user.name}</h1>
        <button onClick={signingOut}>Fazer logout</button>
      </>
    );
  return <button onClick={signing}>Fazer login</button>;
};
export default Router;
