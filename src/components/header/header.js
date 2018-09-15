import React from "react";

/* assets */
import githubLogo from '../../assets/github_logo.png';

export const Header = () => {
    return(
        <header className="app-header">
             <h1 className="App-title">
                  <a href="/">mobeye</a>
             </h1>
             <a className="btn_github" href="https://github.com/" target="_blank">
                  <img src={githubLogo} alt="logo Github"/>
              </a>
        </header>
    )
}