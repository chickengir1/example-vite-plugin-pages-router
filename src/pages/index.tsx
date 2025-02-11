import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <h1>Hi this is home page</h1>
      <Link to="/blog">블로그</Link>
    </div>
  );
};

export default Home;
