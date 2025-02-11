import RouteContainer from "vite-plugin-pages-router";

const App = () => {
  return (
    <div>
      <header>
        <h1>헤더</h1>
      </header>
      <RouteContainer />
      <footer>
        <h1>푸터</h1>
      </footer>
    </div>
  );
};

export default App;
