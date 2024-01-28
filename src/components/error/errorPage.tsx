import { useRouteError } from "react-router-dom";

export interface err {
    statusText: string;
    message: string;
}


export default function ErrorPage() {
  const error = useRouteError() as err;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Erro Inesperado</p>
      <p>
        <i>{error.statusText  || error.message}</i>
      </p>
    </div>
  );
}