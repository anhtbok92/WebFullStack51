export default function CallApi() {
    return fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=114dae692d3849b1b55716b0e777835f')
        .then(response => response.json());
}