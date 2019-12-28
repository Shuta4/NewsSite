import React, { Component } from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props)
    }
    /*
    Для добавления контактов: в пропсах указать массив "contactsArr".
    В этом массиве должны содержаться объекты (каждый соответствует одному контакту).
    Объект может содержать:
    - "contactName" Имя контакта, которое будет занесено в "<p>{contactName}: <a></a></p>""
    - "contactUrl" URL контакта, которое будет занесено в атрибут "href" тега "a"
    - "contactTitle" Title контакта, который будет занесен в атрибут "title" тега "a"
    - "contactString" Строка, которая будет видна пользователю (<a>{contactString}</a>)
    Полный контакт: <p>{contactName}: <a href={contactUrl} title={contactTitle} target="_blank">{contactString}</a></p>
        (если "contactName" == "", то ":" после "{contactName}" будет убрано)
    */

    render() {
        return <div className="footer-main__contacts"> <p>Контакты:</p>
            {
                this.props.contactsArr.map((value, key) => {
                    return <p key={key}>{value.contactName != "" ? value.contactName + ":" : ""} <a href={value.contactUrl} title={value.contactTitle} target="_blank">{value.contactString}</a></p>
                })
            }
            </div>
    }
}
export default Contacts;
