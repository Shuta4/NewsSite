export default function addArticle(article) {
    if (!article.header || !article.text || !article.creationDate || !article.creationDateText) return 0;
    // Здесь будет запрос на сервер
    console.log(article)
    return 1;
}