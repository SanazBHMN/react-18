import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex justify-center space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate(`/dictionary/${word}`);
      }}
    >
      <input
        type="text"
        className="shrink min-w-0 px-2 py-1 rounded"
        placeholder="Dinosaur"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}

export default DefinitionSearch;
