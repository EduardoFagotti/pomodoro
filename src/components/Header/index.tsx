import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <span>Pomodoro</span>
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
