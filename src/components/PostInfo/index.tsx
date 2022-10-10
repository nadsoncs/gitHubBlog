import { FaAngleLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Info } from "../Info";
import { PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <a href="https://github.com/nadsoncs">
          <FaAngleLeft size={12}/>
          voltar
        </a>

        <a href="https://github.com/nadsoncs">
          GITHUB
          <FaExternalLinkAlt size={12}/>
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <Info />
    </PostInfoContainer>
  )
}