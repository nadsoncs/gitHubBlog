import styled from "styled-components";

export const PostInfoContainer = styled.div`
  width: "100%";
  padding: 2rem;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    gap: 0.5rem;
  }
`

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