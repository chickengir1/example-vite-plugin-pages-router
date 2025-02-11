import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>블로그 포스트</h1>
      <p>포스트 ID: {id}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/blog">블로그 페이지로 이동(blog/index)</Link>
        <Link to="/blog/list">목록으로 이동(blog/list)</Link>
        <Link to="/">홈페이지로 이동(index)</Link>
      </div>
    </div>
  );
};

export default BlogPost;
