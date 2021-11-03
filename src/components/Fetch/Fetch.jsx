import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fetch.css"

const Fetch = () => {
  const BASEURL = "https://digimon-api.vercel.app/api";
  const ITEMSURL = "/digimon";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(BASEURL + ITEMSURL).then(
      (res) => {
        setItems(res.data);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <img
          src="https://i.pinimg.com/originals/1f/9d/a3/1f9da3a8c930b30e27f6c479f881716f.gif"
          alt="Agumon"
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="title">
          <h1>Lista de Digimon</h1>
        </div>
        <div className="characters">
        <ul className="characters__container">
          {items.map((item) => (
            <li className="characters__item"key={item.id}>
              <p className="characters__name">{item.name}</p>
              <p className="characters__caption">{item.level}</p>
              <img className="characters__img" src={item.img} alt={item.title} />
            </li>
          ))}
        </ul>
        </div>
      </>
    );
  }
};

export default Fetch;
