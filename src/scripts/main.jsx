import ReactDOM from 'react-dom';
import React from "react";
import Page from "./Components/Page/Page.jsx";

const contArr = [{
    contactName: "Телефон",
    contactUrl: "tel:+79157000000",
    contactTitle: "Telephone",
    contactString: "+7 915-7**-**-**",
}, {
    contactName: "Электронная почта",
    contactUrl: "mailto:skirdin.nik@gmail.com",
    contactTitle: "Email",
    contactString: "skirdin.nik@gmail.com",
}, {
    contactName: "",
    contactUrl: "https://github.com/Shuta4/NewsSite",
    contactTitle: "GitHub page",
    contactString: "Страница на GitHub.com",
}]

ReactDOM.render(<Page 
    contactsArr={contArr}
    siteImage="https://www.101domain.ua/images/flags/large/NEWS.png"
    siteName="News Site" />, 
    document.querySelector(".root"));