import { useCallback, useEffect, useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { gitHubSearchApi } from '../../lib/gitHubSearch'

import { HomeContainer } from './styles'

interface PostProps {
  id: number;
  title: string;
  body: string;
  updatedAt: string;
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  
  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await gitHubSearchApi.get('/issues', {
      params: {
        q: query+'repo:nadsoncs/gitHubBlog',
      },
    })

    if(response.data.total_count > 0){
      const postsResult = response.data.items.map(item => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          updatedAt: 'Há 2 dia'
        }
      })

      setPosts(postsResult)
    }
    
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <HomeContainer>
      <Profile />

      <main>
        <div className="count">
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>

        <div className="postsList">
          { posts.map(post => (
            <PostCard 
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              updatedAt={post.updatedAt}
            />
          ))}
        </div>
      </main>
    </HomeContainer>
  )
}