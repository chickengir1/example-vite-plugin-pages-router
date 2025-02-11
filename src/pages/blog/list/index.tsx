import { Link } from "react-router-dom";

const List = () => {
  const id = 1;
  return (
    <div>
      <h1>블로그 포스트 리스트 전체(목록 페이지)</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/blog">블로그 페이지로 이동(blog/index)</Link>
        <Link to={`/blog/${id}`}>
          블로그 {id}번 포스트로 이동(blog/{id})
        </Link>
        <Link to={`/blog/list/${id}`}>
          리스트 1번 포스트로 이동(blog/list/{id})
        </Link>
        <Link to="/">홈페이지로 이동(index)</Link>
      </div>
    </div>
  );
};

export default List;
