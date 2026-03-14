import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
function Header() {
  const { votes, initialTasks } = useContext(Context);
  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);
  const trending = () => {
    const maxValue = Object.values(votes).reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    });
    if(maxValue===0)
        return "No one voted yet"
    const k = Object.keys(votes).find((e) => votes[e] === maxValue);

    const a = initialTasks.find((e) => Number(k) === e.id);
     return a.title
  };

  return (
    <div className="bg-blue-200 rounded-sm p-2 flex flex-col w-full gap-1 items-center font-bold shadow">
      <div>Total Votes: {totalVotes}</div>
      <div>Trending Task: {trending()}</div>
    </div>
  );
}

export default Header;
