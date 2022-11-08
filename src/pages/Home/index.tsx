import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  
  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await gitHubSearchApi.get('/issues', {
      params: {
        q: query+'repo:nadsoncs/gitHubBlog',
      },
    })

    if(response.data.total_count > 0){
      const postsResult = response.data.items.map(item => {
        return {
          id: item.number,
          title: item.title,
          body: item.body,
          updatedAt: formatDistanceToNow(new Date(item.updated_at), {
            addSuffix: true,
            locale: ptBr,
          })
        }
      })

      setPosts(postsResult)
    }
    
  }, [])

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

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
        
        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <input 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>

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