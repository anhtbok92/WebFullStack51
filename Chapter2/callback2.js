function doAsync(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url)
    xhr.onload = () => onSuccess(xhr.responseText);
    xhr.onerror = () => onError(xhr.statusText);
    xhr.send();
}

doAsync("https://api.github.com/users/anhtbok92", valueOnSuccess => {
    console.log(valueOnSuccess);
}, valueError => {
    console.log(valueError);
});