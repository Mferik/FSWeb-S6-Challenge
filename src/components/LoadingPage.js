import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  font-size:1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  return (
    <LoadingDiv>
      <img
        style={{ maxWidth: "25rem", maxHeight: "25rem" }}
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcand30-68485dad-da2f-4a15-8f71-8b32e6f87695.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbmQzMC02ODQ4NWRhZC1kYTJmLTRhMTUtOGY3MS04YjMyZTZmODc2OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ftuPgP8zQ6VLgmKuUsbf7BTwOvQ3s__vPcPT1kqXXI8"
        alt=""
      />
      <h3>Obi Wan Kenobi Sizi Selamlıyor !</h3>
    </LoadingDiv>
  );
};

export default LoadingPage;
