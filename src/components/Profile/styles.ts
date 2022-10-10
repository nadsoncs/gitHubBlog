import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: "100%";
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: row;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const Bio = styled.div`
  margin-left: 2rem;
  
  header {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  a {
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    svg {
      margin-left: 0.5rem;
    }
  }

  .info {
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
  }
`