import React, { useState, useEffect } from "react";
import { Rate, Input } from 'antd';
import Axios from 'axios';

const { TextArea } = Input;
const baseURL= "https://ismalteria-strapi.rosenilda.repl.co/api/feedbacks";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  React.useEffect(() => {
    Axios.get(baseURL).then((response) => {
        setFeedbacks(response.data.data);
      });
  }, []);

if (!feedbacks) return null;

  return (
    <div>
      {feedbacks.map(el => (<div key={el.id}>
      <h2>{el.attributes.nomeDoUser}</h2>
      <p>{el.attributes.comentario}</p>
        </div>
    ))}
    </div>
  );
}

export default Feedbacks;