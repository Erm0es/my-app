//import React from "react"
import ReactDOM from "react-dom/client"


function Header() {
    return (
        <header>
            <nav className="header-nav">
                <img src="./logo192.png" alt="React logo." className="img" />
                <ul className="nav-items">
                    <li>Contact</li>
                    <li>About</li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </ header >
    )
}

function MainInfo() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Wiberg development. All rights reserved.</small>
        </footer>
    )

}

function Page() {
    return (
        <div>
            <Header />
            <MainInfo />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)