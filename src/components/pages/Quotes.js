import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Quotes.css";
const Quotes = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    getAllQuotes();
  }, []);
  const getAllQuotes = async () => {
    const url = "https://dummyjson.com/quotes";
    try {
      let quotes = await axios.get(url);
      console.log(quotes);
      let list = quotes.data.quotes;
      for (const interator of list) {
        console.log(interator);
        let age = Math.floor(Math.random() * 99);
        interator.age = age < 50 ? "👶" : "👵/👴";
      }
      console.log(list);
      setQuotes(list);
    } catch (error) {}
  };

  if (!quotes) return null;
  return (
    <section className="quotes">
      <div className="title-holder">
        <h1 className="title">Quotes</h1>
      </div>

      <div className="table-holder">
        <table>
          <tr>
            <th>ID</th>
            <th>Quotes</th>
            <th>Author</th>
            <th>Age</th>
          </tr>
          {quotes.map((quote) => {
            return (
              <tr>
                <td>{quote.id}</td>
                <td>{quote.quote}</td>
                <td>{quote.author}</td>
                <td>{quote.age}</td>
              </tr>
            );
          })}
        </table>
        <div className="link-hol">
          <Link to={"/randomQuotes"} className="link">
            Random Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
