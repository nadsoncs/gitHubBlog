import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <main>
        <div className="count">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>

        <div className="postsList">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>


      </main>
    </HomeContainer>
  )
}