import { PostContainer } from "./styles";
import { PostInfo } from '../../components/PostInfo'
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { gitHubIssuesApi } from "../../lib/gitHubIssues";
import { formatDistanceToNow } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
interface PostProps {
  login: string;
  title: string;
  body: string;
  comments: number;
  url: string;
  updatedAt: string;
}
export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostProps>({} as PostProps);
  
  const fetchPost = useCallback(async () => {
    if (id !== undefined) {
      const response = await gitHubIssuesApi.get(id)

      setPost({
        login: response.data.user.login,
        title: response.data.title,
        body: response.data.body,
        comments: response.data.comments,
        url: response.data.html_url,
        updatedAt: formatDistanceToNow(new Date(response.data.updated_at), {
          addSuffix: true,
          locale: ptBr,
        })
      })
    }
    
  }, [])

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo
        login={post.login}
        title={post.title}
        comments={post.comments}
        url={post.url}
        updatedAt={post.updatedAt}
      />

      <main>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </main>
    </PostContainer>
  )
}