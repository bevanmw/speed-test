import Canvas from "./Canvas";

function App() {
  return (
    <div className="relative">
      <div className="h-dvh w-full flex justify-center items-center">
        <h1 className="text-xl">Hello World!</h1>
      </div>

      <div className="absolute inset-0">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
