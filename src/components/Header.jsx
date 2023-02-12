import {Link} from "react-router-dom"
import headerimg from "../assets/images/logo.svg";
export default function Header() {
  return (
    <header>
      <div>
        <img className="headerimg" src={headerimg} alt="kasa" />
      </div>
      <nav>
        <ul>
          <li>
          <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/about"}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
