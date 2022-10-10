import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 54rem;

  margin: 0 auto;

  main {
    margin-top: 4.5rem;
  }

  h2 {
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]};
  }

  .count {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  input {
    width: 100%;

    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }

  .postsList {
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`