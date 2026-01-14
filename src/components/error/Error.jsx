import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div className="container">
      <div className="errorWrite">
        <h4>Home</h4>/<h4>404 Error</h4>
      </div>
      <div className="notFound">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className="notBtn">
          <button>Back to home </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
