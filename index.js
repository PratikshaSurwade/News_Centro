
var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=55f9f9b698ee412c88a4a35a13e328e4';

let fetchBtn = document.getElementById('fetchBtn');

let newsHtml = "";

console.log("sab kuch good hai");
fetchBtn.addEventListener("click", getData);

function getData(e) {

    e.preventDefault();
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        data.articles.forEach(articles => {

            let news = `<div class="card">
                        <img  class="imaGe" src="${articles.urlToImage}" alt="Imageshow"/>
                        <div class="cardInfo">
                        <h5>${articles.title}</h5>
                        <hr>
                        <p style={{color:"#d3d3d3"}}>${articles.description}</p>
                        
                            <span class="postThumbnail1">${articles.author}</span>
                            <span class="postThumbnail2">${articles.publishedAt}</span>
                        
                        </div>
                    </div>
                `;
            newsHtml += news;
        })
        newsAccordion.innerHTML = newsHtml;
    }).catch((err) => {
        console.log(err, "error hai jana");
    })
}