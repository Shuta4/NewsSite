export function articlesAddDataSuccess() {
    return {
        type: "ARTICLES_ADD_DATA_SUCCESS",
        ok: true
    }
}

export function articlesAddData(url, article) {
    return fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "http://localhost:8080"
        },
        body: JSON.stringify(article)
    }).then(response => {
        if(!response.ok) throw new Error(response.statusText);
    }).then(() => {
        alert("Статья добавлена!");
        return articlesAddDataSuccess();
    });
}

export default articlesAddData;