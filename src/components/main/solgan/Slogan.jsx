import { useState } from "react";
import "./slogan.css";

const Slogan = ({ slogan }) => {
  const [caption, setCaption] = useState("Click to copy");
  const [mouseOnslogan, setMouseOnslogan] = useState(false);
  const mouseOver = () => {
    setMouseOnslogan(true);
  };

  const mouseOut = () => {
    setMouseOnslogan(false);
    setCaption("Click to copy");
  };

  const onClickHandler = (slogan) => {
    navigator.clipboard.writeText(slogan);
    setCaption("Copied!");
  };
  return (
    <div
      className="slogan-wrapper"
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      onClick={() => onClickHandler(slogan.slogan)}
    >
      <div className="slogan">{slogan.slogan}</div>
      {mouseOnslogan && (
        <div className="caption">
          <span>{caption}</span>
        </div>
      )}
      {/* <div className="caption">{caption}</div> */}
    </div>
  );
};

export const Slogans = ({ slogan }) => {
  return (
    <div className="slogan-container mb-48">
      {slogan.map((slogan, i) => (
        <Slogan slogan={slogan} key={i} />
      ))}
    </div>
  );
};
