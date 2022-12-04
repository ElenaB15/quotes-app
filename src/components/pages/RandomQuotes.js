import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RandomQuote.css";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    axios.get("https://zenquotes.io/api/random").then((response) => {
      console.log(response.data);
      setRandomQuote(response.data);
    });
  }, []);

  let newQuote = () => {
    axios
      .get("https://zenquotes.io/api/random")
      .then((response) => setRandomQuote(response.data));
  };
  if (!randomQuote) return null;
  return (
    <>
      <section className="random">
        <div className="container">
          <div className="quote-hol">
            {randomQuote.map((quote, index) => {
              return (
                <div key={index} className="blockquote">
                  <span class="q-span">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>{" "}
                  </span>

                  <p className="quote">{quote.q}</p>
                  <p className="author">{quote.a}</p>
                </div>
              );
            })}
            <div className="random-btn-hol">
              <Link to={"/"} className="link">
                Back
              </Link>
              <button className="btn" onClick={newQuote}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomQuote;
