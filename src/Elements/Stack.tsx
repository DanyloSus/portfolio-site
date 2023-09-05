const Stack = () => {
  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center flex-col gap-[120px] px-[120px] py-20"
      id="stack"
    >
      <h1 className="reveal">Stack</h1>
      <div className="flex gap-[160px] flex-wrap items-center justify-center">
        <div className="revealT">
          <img src="./react.png" alt="react" className="object-cover" />
          <p>React</p>
        </div>
        <div className="revealT">
          <img src="./rest-api.png" alt="rest api" className="object-cover" />
          <p>Fast API</p>
        </div>
        <div
          className="revealT"
          onClick={() => {
            window.open("https://t.me/GetBotMedia", "_self");
          }}
        >
          <img
            src="./telegram-api.png"
            alt="telegram api"
            className="object-contain"
          />
          <p>Telegram API</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
