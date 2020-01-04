import React from "react"

class AddArticle extends React.Component {
    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.parseDateReadable = this.parseDateReadable.bind(this);
        this.parseDateUNIX = this.parseDateUNIX.bind(this);
    }
    generateID(length) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
        if (! length) {
        length = Math.floor(Math.random() * chars.length);
        }
        var str = "";
        for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
    parseDateObj(date) {
        var arr = date.split('-');
        return {
            year: arr[0],
            month: arr[1],
            day: arr[2]
        }
    }
    parseDateReadable(date) {
        var dateObj = this.parseDateObj(date)
        var str = ""
        str += dateObj.day;
        switch (dateObj.month) {
            case ("01"):
                str += " Января"
                break
            case ("02"):
                str += " Февраля"
                break
            case ("03"):
                str += " Марта"
                break
            case ("04"):
                str += " Апреля"
                break
            case ("05"):
                str += " Мая"
                break
            case ("06"):
                str += " Июня"
                break
            case ("07"):
                str += " Июля"
                break
            case ("08"):
                str += " Августа"
                break
            case ("09"):
                str += " Сентября"
                break
            case ("10"):
                str += " Октября"
                break
            case ("11"):
                str += " Ноября"
                break
            case ("12"):
                str += " Декабря"
                break
            default: 
                str += " " + dateObj.month 
                break
        }
        str += " " + dateObj.year    
        return str   
    }
    parseDateUNIX(date) {
        var dateObj = this.parseDateObj(date)
        var datum = new Date(Date.UTC(dateObj.year,dateObj.month - 1, dateObj.day, 0,0,0));
        return datum.getTime() / 1000.0;
    }
    handlerSubmit(event) {
        event.preventDefault();
        var form = event.target;
        if (!form.header.value || !form.text.value || !form.creationDate.value) {
            alert("Заполните обязательные поля, помеченные (*)");
            return false;
        }
        var article = {
            id: this.generateID(10),
            header: form.header.value,
            text: form.text.value,
            sourceLink: form.sourceURL.value,
            sourceName: form.sourceName.value,
            creationDateText: this.parseDateReadable(form.creationDate.value), 
            creationDate: this.parseDateUNIX(form.creationDate.value)
        }
        addArticle(article)
    }
    render() {
        return <form className="article-add" onSubmit={this.handlerSubmit}>
            <h3>Добавление статьи</h3>
            <p className="article-add__label">Введите название статьи*:</p>
            <input type="text" name="header" />
            <p className="article-add__label">Введите текст статьи*:</p>
            <textarea type="text" name="text"/>
            <p className="article-add__label">Введите источник:</p>
            <input type="text" name="sourceName"/>
            <p className="article-add__label">Введите ссылку на источник:</p>
            <input type="url" name="sourceURL"/>
            <p className="article-add__label">Введите дату создания стать*:</p>
            <input type="date" name="creationDate"/>
            <input type="submit" />
        </form>
    }
}

export default AddArticle;