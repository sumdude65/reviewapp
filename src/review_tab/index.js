import React, { useState } from "react";
import "./style.css";
import { data } from "../data/index";

const entries = [...data];

const Review = (props) => {
  const { img, name, title, review } = props.props;
  return (
    <div className="review">
      <div className="img">
        <img src={img} alt={name} />
        <span className="svg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </span>
      </div>
      <h1 className="name">{name}</h1>
      <h2 className="job">{title}</h2>
      <p className="info">{review}</p>
    </div>
  );
};

export const ReviewTab = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const length = entries.length - 1;
  const increase = () => {
    if (currentReview === length) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };
  const decrease = () => {
    if (currentReview === 0) {
      setCurrentReview(length);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };
  const random = () => {
    const randomNumber = Math.round(Math.random() * length);
    setCurrentReview(randomNumber);
  };
  return (
    <div className="review-box">
      <Review props={entries[currentReview]} />
      <div className="buttons">
        <button className="btn" onClick={() => decrease()}>
          Before
        </button>
        <button className="btn" onClick={() => increase()}>
          Next
        </button>
      </div>
      <button className="btn" onClick={() => random()}>
        Surprise me
      </button>
    </div>
  );
};
