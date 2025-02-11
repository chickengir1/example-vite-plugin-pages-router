import { Link } from "react-router-dom";
const Blog = () => {
  const id = 1;
  return (
    <div>
      <h1>블로그 페이지</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/blog/list">목록으로 이동(blog/list)</Link>
        <Link to={`/blog/${id}`}>
          {id}번 포스트로 이동(blog/{id})
        </Link>
        <Link to="/">홈페이지로 이동(index)</Link>
      </div>
    </div>
  );
};

export default Blog;
