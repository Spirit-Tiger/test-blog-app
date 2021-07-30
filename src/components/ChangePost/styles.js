import styled from "styled-components";

export const StyledChangePost = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  top: 0;
  left: 0;

  h3 {
    color: white;
  }
  input[name="title"] {
    width: 400px;
    height: 50px;
  }
  textarea[name="body"] {
    width: 400px;
    height: 100px;
  }
`;
