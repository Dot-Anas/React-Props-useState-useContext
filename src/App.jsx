import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Reset from "./components/Reset";
function App() {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center ">
      <div className="w-170 bg-slate-100 p-4 rounded-md shadow-lg flex flex-col gap-4">
        <Header />
        <div className="flex gap-4">
          <TaskList />
          <Reset />
        </div>
      </div>
    </div>
  );
}

export default App;
