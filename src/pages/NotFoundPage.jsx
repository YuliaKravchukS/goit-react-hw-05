import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <img src="" alt="" />
      <h2>
        Such a page does not exist. <br /> Go to the main page
      </h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
