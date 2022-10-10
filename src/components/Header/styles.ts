import styled from 'styled-components'
import CoverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  background: ${props => props.theme["base-profile"]};
  
  .cover {
    display: flex;
    width: 100%;
    height: 18.5rem;
    padding-top: 4rem;
    justify-content: center;
    background-image: url(${CoverImg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`