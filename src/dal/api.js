import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': 'ae1311d0admshbda969e876130efp1d5a1djsn0065c94de73a',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
})

export const jokesAPI = {
    random() {
        return instance.get(`random`);
    },
    byCategory(category) {
        return instance.get(`random?category=${category}`);
    },
    categories() {
        return instance.get(`categories`);
    },
    search(query) {
        return instance.get(`search?query=${query}`);
    }
}
