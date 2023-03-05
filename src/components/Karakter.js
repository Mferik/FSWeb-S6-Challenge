// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Title from "./Title";
import Container from "./Container";
import LoadingPage from "./LoadingPage";

const WrapperDiv = styled.div`
  color: white;
  position: center;
  border: 1px inset #959595;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 40px;
  margin: 0 auto;
  padding: 2rem;
  max-width: 35%;
`;

function Karakter() {
  const [people, setPeople] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setPeople(response.data);
      });
    }, 1000);
  }, []);

  return (
    <div>
      <WrapperDiv>
        {people == null ? (
          <LoadingPage />
        ) : (
          <Carousel>
            {people.map((item, i) => {
              return (
                <div key={i}>
                  <Title title={item} />
                  <Container element={item} />
                </div>
              );
            })}
          </Carousel>
        )}
      </WrapperDiv>
    </div>
  );
}

export default Karakter;
