let url = document.getElementById('link');
async function getUrl(url) {
    url =url.value;
    const response = await fetch (`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    const {
        result
    } = data;
    console.log(result);
    let a = result.full_short_link;
    let b = result.full_short_link2;
    window.alert(a);
    window.alert(b);
}
