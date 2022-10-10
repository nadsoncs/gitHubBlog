import { HeaderContainer } from "./styles";

import logoImg from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <div className="cover">
        <img src={logoImg} alt="" />
      </div>
    </HeaderContainer>
  )
}