const Stack = () => {
  return (
    <div
      className="w-screen flex items-center justify-center flex-col gap-[15px] px-[120px] md:px-[30px]"
      id="stack"
    >
      <h1 className="reveal">Stack</h1>
      <p className="reveal mb-7 text-xl text-center">
        The technology stack on which the portfolio is built
      </p>
      <div className="flex gap-[80px] flex-wrap items-center justify-center">
        <div className="revealT">
          <img src="./react.png" alt="react" className="object-cover" />
          <p>React</p>
        </div>
        <div className="revealT">
          <img src="./rest-api.png" alt="rest api" className="object-cover" />
          <p>Fast API</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
