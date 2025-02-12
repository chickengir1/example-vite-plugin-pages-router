import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/test/1">Test 1</Link>
        <Link to="/test/2">Test 2</Link>
      </div>
    </div>
  );
};

export default Test;
