import { useParams } from "react-router-dom";

const TestId = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>TestId</h1>
      <p>{id}</p>
    </div>
  );
};

export default TestId;
