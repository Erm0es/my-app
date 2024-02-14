//import React from "react"
import ReactDOM from "react-dom/client"
import {Header} from "./components/Header.js"
import {MainInfo} from  "./components/MainInfo.js"
import {Footer} from "./components/Footer.js"

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