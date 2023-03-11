import TitleBar from "./Title"; 
import Toolbar from "./Toolbar";

function Header() {
    return (
        <header className="flex flex-col">
            <TitleBar/>
            <Toolbar/>
        </header>
    );
}

export default Header;