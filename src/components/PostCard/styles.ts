import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${props => props.theme["base-post"]};
    

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 {
    color: ${props => props.theme["base-title"]};
    font-weight: bold;
    font-size: 1.25rem;
    flex: 1;
  }

  p {
    color: ${props => props.theme["base-text"]};
    margin-top: 1.25rem;
    width: 22rem;
    height: 7rem;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: ${props => props.theme["base-span"]};
    font-size: 0.825rem;
    margin-left: 1rem;
  }

`