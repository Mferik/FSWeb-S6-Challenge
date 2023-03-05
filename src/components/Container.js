import React from "react";
import styled from "styled-components";
import Film from "./Film";

const Left = styled.div`
  text-align: left;
`;
const ContainerDiv = styled.div`
  padding: 0.4rem 5rem;
`;



function Container({ element }) {

 
  return (
    <ContainerDiv>
      <Left>
        <strong>Height : </strong> {element.height}
      </Left>

      <Left>
        <strong>Mass : </strong> {element.mass}
      </Left>
      <Left>
        <strong>Gender : </strong>{" "}
        {element.gender.charAt(0).toUpperCase() + element.gender.slice(1)}
      </Left>
      <Left>
        <strong>Birthyear : </strong> {element.birth_year}
      </Left>
      <Left>
        <strong>Skin Color : </strong>{" "}
        {element.skin_color.charAt(0).toUpperCase() +
          element.skin_color.slice(1)}
      </Left>
      <Left>
        <br />
        <Film filmProps={element} />
      </Left>
    </ContainerDiv>
  );
}

export default Container;