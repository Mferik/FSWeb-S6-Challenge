import React, { useState } from "react";
import styled from "styled-components";

const StrongDiv = styled.strong`
  border:1px solid yellow;
  border-radius:5px;
  padding:2px;
  cursor: pointer;
  margin-top:5px;
  background:transparent;
`;
function Film({filmProps}) {
  const [isShowFilm, setIsShowFilm] = useState(false);
  const clickShowFilm = () => {
    setIsShowFilm(!isShowFilm);
  };

  return (
    <>
      <StrongDiv onClick={clickShowFilm}>Films List </StrongDiv>
      <div style={{ display: isShowFilm ? "block" : "none" }}>
        {filmProps.films.map((item, key) => {
          return (
            <div key={key}>
              {" "}
              <strong>{key + 1}.Movie :</strong> {item}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Film;