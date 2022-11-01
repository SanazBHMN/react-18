import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";

function Definition() {
  const [word, setWord] = useState();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  return (
    <>
      <p>Here is the definition</p>
      {word
        ? word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}{" "}
                {meaning.definitions[0].definition}
              </p>
            );
          })
        : null}
    </>
  );
}

export default Definition;