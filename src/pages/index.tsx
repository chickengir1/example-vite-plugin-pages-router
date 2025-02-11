import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        hi this is home page
      </div>
      <Link to="/blog">블로그</Link>
    </div>
  );
};

export default Home;
