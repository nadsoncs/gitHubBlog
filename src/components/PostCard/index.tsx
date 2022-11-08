import { PostCardContainer } from "./styles";

export type PostCardProps = {
  id: number;
  title: string;
  body: string;
  updatedAt: string;
}
export function PostCard({
  id,
  title,
  body,
  updatedAt,
}: PostCardProps) {
  return (
    <PostCardContainer href={'post/'+String(id)} >
      <header>
        <h1>{title}</h1>
        <span>{updatedAt}</span>
      </header>

      <p>{body}</p>
    </PostCardContainer>
  )
}