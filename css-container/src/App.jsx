import "./App.css";

function Card() {
  return (
    <div className="card">
      <h1>Image</h1>
      <h1>Info</h1>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <div className="layout">
        <main className="container">
          <Card />
          <Card />
          <Card />
        </main>
        <article className="container">
          <Card />
          <Card />
          <Card />
        </article>
      </div>
    </div>
  );
}

export default App;
