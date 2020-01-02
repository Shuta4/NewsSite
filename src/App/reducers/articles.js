export function articles(state = [], action) {
    switch (action.type) {
        case "ARTICLES_FETCH_DATA_SUCCESS":
            return action.articles;
        default: return state;
    }
}