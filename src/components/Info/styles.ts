import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 1.5rem;
    display: flex;
    flex-direction: row;

    span {
      margin-right: 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    svg {
      color: ${props => props.theme["base-label"]};
      margin-right: 0.5rem;
    }
`