import { useEffect, useState } from "react";
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";
import { gitHubUsersApi } from "../../lib/gitHubUsers";
import { ProfileContainer, Bio } from './styles'

interface ProfileProps {
  avatar_url: string;
  bio: string;
  followers: number;
  login: string;
  name: string;
  url: string;
  company: string;
}
export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  useEffect(() => {
    async function fetchUserData() {
      const response = await gitHubUsersApi.get('/nadsoncs')

      setProfile({
        avatar_url: response.data.avatar_url,
        bio: response.data.bio,
        followers: response.data.followers,
        login: response.data.login,
        name: response.data.name,
        url: response.data.html_url,
        company: response.data.company,
      })
    }

    fetchUserData()
  }, [])

  if(!profile) {
    return (
      <ProfileContainer></ProfileContainer>
    )
  }

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="avatar" />

      <Bio>
        <header>
          <h1>{profile.name}</h1>
          <a href={profile.url}>
            GITHUB
            <FaExternalLinkAlt size={12}/>
          </a>
        </header>
        <p>{profile.bio}</p>

        <div className="info">
          <span>
            <FaGithub size={18} />
            {profile.login}
          </span>
          <span>
            <FaBuilding size={18} />
            {profile.company}
          </span>
          <span>
            <FaUserFriends size={18} />
            {profile.followers} seguidores
          </span>
        </div>
      </Bio>
    </ProfileContainer>
  )
}