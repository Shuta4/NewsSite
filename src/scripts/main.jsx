import ReactDOM from 'react-dom';
import React from "react";
import Main from "./Components/Page/Main.jsx";

ReactDOM.render(<Main 
    contactTelephone="+79157000000" 
    contactTelephoneReadable="+7 915-7**-**-**" 
    contactEmail="skirdin.nik@gmail.com" 
    gitHubPageUrl="https://github.com/Shuta4/NewsSite"
    siteImage="https://www.101domain.ua/images/flags/large/NEWS.png"
    siteName="News Site" />, 
    document.querySelector(".root"));