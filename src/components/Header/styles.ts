import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
      filter: brightness(1.1);
    }
  }
`;
