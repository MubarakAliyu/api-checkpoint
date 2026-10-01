import UserList from "./UserList";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">API CHECKPOINT</p>
        <h1>User Directory</h1>
        <p>
          Users fetched from JSONPlaceholder using Axios.
        </p>
      </header>

      <UserList />
    </main>
  );
}

export default App;