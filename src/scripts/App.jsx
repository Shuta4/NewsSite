import ReactDOM from 'react-dom';
import React from "react";
import Page from "./Components/Page/Page.jsx";
import "../style.css"
import AboutUs from './Components/Pages/AboutUs.jsx'
import Home from './Components/Pages/Home.jsx'

const navigationArr = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/aboutus",
        title: "About us"
    },
    {
        to: "/article",
        title: "all articles"
    }
]

const routeArr = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/aboutus",
        component: AboutUs,
        exact: true
    },
    {
        path: "/article",
        component: Home,
        exact: true
    }
]

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

const articleArr = [
    {
        articleHeader: "Это статья 1",
        articleText: `статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 
            статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 
            статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 
            статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 
            статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1 статья 1`,
        articleSource: {
            sourceLink: "",
            sourceName: ""
        },
        articleCreationDate: {
            text: "25 декабря 2019",
            date: "2018-11-23"
        }
    },
    {
        articleHeader: "Это статья 2",
        articleText: `статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 
            статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 
            статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2 статья 2.`,
        articleSource: {
            sourceLink: "",
            sourceName: "Это короче сурс(2)"
        },
        articleCreationDate: {
            text: "25 декабря 2019",
            date: "2019-11-23"
        }
    },
    {
        articleHeader: "Это статья 3",
        articleText: `Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 
            3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 
            3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 
            3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 
            3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 
            3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3 Статья 3.`,
        articleSource: {
            sourceLink: "https://html5book.ru/html5-semantic-elements",
            sourceName: "Это короче сурс(3)"
        },
        articleCreationDate: {
            text: "25 декабря 2019",
            date: "2019-12-25"
        }
    }
]

ReactDOM.render(<Page 
    navigationArr = {navigationArr}
    routeArr = {routeArr}
    contactsArr={contArr}
    siteImage="https://www.101domain.ua/images/flags/large/NEWS.png"
    siteName="News Site" />, 
    document.querySelector(".root"));