import ReactDOM from 'react-dom';
import React from 'react';
import App from './Components/App.jsx'
import Home from "./Components/Pages/Home.jsx";
import Articles from './Components/Pages/Articles.jsx';
import About from './Components/Pages/About.jsx';
import "./style.css"

const navigationArr = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/articles",
        title: "Articles"
    }
]
const routeArr = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/about",
        component: About,
        exact: true
    },
    {
        path: "/articles",
        component: Articles,
        exact: true
    }
]
const contArr = [{
    contactName: "Телефон",
    contactUrl: "tel:+79157000000",
    contactTitle: "Telephone",
    contactString: "+7 915-7**-**-**"
}, {
    contactName: "Электронная почта",
    contactUrl: "mailto:skirdin.nik@gmail.com",
    contactTitle: "Email",
    contactString: "skirdin.nik@gmail.com"
}, {
    contactName: "",
    contactUrl: "https://github.com/Shuta4/NewsSite",
    contactTitle: "GitHub page",
    contactString: "Страница на GitHub.com"
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

ReactDOM.render(<App 
    siteImage="https://www.101domain.ru/images/flags/large/NEWS.png"
    siteName="Новостной сайт"
    navigationArr={navigationArr}
    articleArr={articleArr}
    contactsArr={contArr}
    routeArr={routeArr}
    />, document.querySelector('.root'))