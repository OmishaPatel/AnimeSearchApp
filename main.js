const cards = document.querySelector('.cards');
const search = document.getElementById('search-query');
const results = [];

search.addEventListener('input', getFactFetch);
// getting data using fetch
function getFactFetch() {
    let text = search.value;
    fetch('https://api.jikan.moe/v3/search/anime?q='+text+'&limit=10')
    .then(resp => resp.json())
    .then(data => {
        results.push(...data.results)
        console.log(results)
        let show = results.map(item => {
            return   `<div class="card">
                        <a href="${item.url}" target="_blank">
                         <img src="${item.image_url}" alt="anime poster">
                        <h3>${item.title}</h3>
                        </a> 
                        <p>${item.synopsis}</p>
                    </div>`;
        }).join('');
        cards.innerHTML = show; 
     
})
//to clear the original array
results.splice(0, results.length);
//to clear the innerHTML once the user deletes the search input
cards.innerHTML = '';
}
// This is a Anime Search App build with HTML5, CSS3 and Vanilla Javascript. I am using fetch to access the data from the jikan api. This is also mobile responsive. I have limited the display to 10 items per page.