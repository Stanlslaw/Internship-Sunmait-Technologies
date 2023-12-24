import "./mainHeader.scss"
import SearchInput from "./SearchProjectInput/searchProjectInput.jsx"

export default function MainHeader(props) {
    return(
        <header className="main-header">
        <div className="main-header-container">
            <h1 className="main-header-h">
                Projects
            </h1>
            <p className="main-header-desc">
                From configuration to security, web apps to big
                data—whatever the infrastructure needs of 
                your application may be, there is a Spring Project 
                to help you build it. Start small and 
                use just what you need—Spring is modular by design.
            </p>
            <SearchInput searchHandler={props.searchHandler}></SearchInput>
        </div>
    </header>
    )
}