import {useRouteError} from "react-router-dom";

const Error = () => {
  const err = useRouteError(); // this hook is use to provide error in json format

  return (
    <div>
      <h1>Opps!! Something went wrong</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
