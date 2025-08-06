import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// 1. You should create a react project, add tailwind css. Then create 4 different components. Also add styles to them using tailwind and send data from one to another component using props concept.

function App({ data }) {
  return (
    <>
      <div className="h-screen w-screen bg-slate-300 flex items-center justify-center">
        <div className="h-40 w-60 bg-blue-500 gap-2 mx-1 text-white flex items-center justify-center hover:bg-amber-100 hover:text-black hover:duration-800">
          {data}
        </div>
        <div className="h-40 w-60 bg-yellow-500 gap-2 mx-1 text-white flex items-center justify-center hover:bg-amber-100 hover:text-black hover:duration-800">
          {data}
        </div>
        <div className="h-40 w-60 bg-purple-500 gap-2 mx-1 text-white flex items-center justify-center hover:bg-amber-100 hover:text-black hover:duration-800">
          {data}
        </div>
        <div className="h-40 w-60 bg-green-500 gap-2 mx-1 text-white flex items-center justify-center hover:bg-amber-100 hover:text-black hover:duration-800">
          {data}
        </div>
      </div>
    </>
  );
}

export default App;
