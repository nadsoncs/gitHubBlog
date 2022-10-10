import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";
import { ProfileContainer, Bio } from './styles'
export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/nadsoncs.png" alt="avatar" />

      <Bio>
        <header>
          <h1>Nadson Cerqueira</h1>
          <a href="https://github.com/nadsoncs">
            GITHUB
            <FaExternalLinkAlt size={12}/>
          </a>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <div className="info">
          <span>
            <FaGithub size={18} />
            nadsoncs
          </span>
          <span>
            <FaBuilding size={18} />
            UFSB
          </span>
          <span>
            <FaUserFriends size={18} />
            32 seguidores
          </span>
        </div>
      </Bio>
    </ProfileContainer>
  )
}