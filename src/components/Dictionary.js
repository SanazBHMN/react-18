import { useEffect, useState } from "react";

function Dictionary() {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("state updated", word);
  });

  return (
    <>
      <input
        type="text"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definition for {word}</h1>
    </>
  );
}

export default Dictionary;
