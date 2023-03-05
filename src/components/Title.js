import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.4rem 5rem;

`;

const TitleP = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: underline;
`;

const Title = (props) => {
  const { title } = props;
  return (
    <TitleDiv>
      <TitleP>{title.name}</TitleP>
      {""}
    </TitleDiv>
  );
};

export default Title;
