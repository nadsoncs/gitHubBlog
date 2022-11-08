import { 
  FaAngleLeft, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCalendarDay, 
  FaCommentAlt
} from "react-icons/fa";

import { PostInfoContainer, InfoContainer } from './styles'

interface PostInfoProps {
  login: string;
  title: string;
  comments: number;
  url: string;
  updatedAt: string;
}
export function PostInfo({
  login,
  title,
  comments,
  url,
  updatedAt,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <a href="/">
          <FaAngleLeft size={12}/>
          voltar
        </a>

        <a href={url}>
          VER NO GITHUB
          <FaExternalLinkAlt size={12}/>
        </a>
      </header>

      <h1>{title}</h1>

      <InfoContainer>
        <span>
          <FaGithub size={18} />
          {login}
        </span>
        <span>
          <FaCalendarDay size={18} />
          {updatedAt}
        </span>
        <span>
          <FaCommentAlt size={18} />
          {comments} comentários
        </span>
      </InfoContainer>
    </PostInfoContainer>
  )
}