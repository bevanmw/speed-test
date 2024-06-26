import { useEffect, useState } from "react";
import Canvas from "./Canvas";
import mapboxglSupported from "@mapbox/mapbox-gl-supported";

function App() {
  const [message, setMessage] = useState("Checking");

  useEffect(() => {
    if (mapboxglSupported.supported()) {
      setMessage("Supported");
    } else {
      setMessage("Not supported");
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Canvas />
      </div>

      <div className="h-dvh w-full flex justify-center items-center relative">
        <h1 className="text-xl">{message}</h1>
      </div>
    </div>
  );
}

export default App;
