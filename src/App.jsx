import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  const close = () => {
    tg.close();
  };
  return (
    <>
      <div>
        <button onClick={close}>Berkitish</button>
      </div>
    </>
  );
}

export default App;
