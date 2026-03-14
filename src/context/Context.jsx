import { createContext, useState } from "react";
export const Context = createContext();
export const Provider = ({ children }) => {
  const initialTasks = [
    { id: 0, title: "Learn React" },
    { id: 1, title: "Learn Java" },
    { id: 2, title: "Learn Web" },
    { id: 3, title: "Learn Next" },
  ];

  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const handleVote=(id)=>{

    setVotes((prev)=>({
        ...prev,
        [id]: prev[id]+1
    }))

  }
  const reset=()=>{
    setVotes({ 0: 0, 1: 0, 2: 0, 3: 0 })
  }
  return (
    <Context.Provider value={{ initialTasks,votes,handleVote,reset}}>{children}</Context.Provider>
  );
};
