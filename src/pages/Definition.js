import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "../components/DefinitionSearch";
import NotFound from "../components/NotFound";

function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);

  if (notFound) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <p>Here is the definition</p>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}{" "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
        </>
      ) : null}
      <p>Search again:</p>
      <DefinitionSearch />
    </>
  );
}

export default Definition;
