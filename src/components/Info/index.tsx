import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";
import { InfoContainer } from "./styles";

export function Info() {
  return (
    <InfoContainer>
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
    </InfoContainer>
  )
}