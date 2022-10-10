import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 54rem;

  margin: 0 auto;

  main {
    width: 100%;

    padding: 2.5rem 2rem;

    a {
      color: ${props => props.theme.blue};
    }

    pre {
      padding: 1rem;
      background: ${props => props.theme["base-post"]};
      border-radius: 2px;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    code {
      display: block;
    }
  }
`