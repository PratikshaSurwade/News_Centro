
var url1 = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=55f9f9b698ee412c88a4a35a13e328e4';

var url2 = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=55f9f9b698ee412c88a4a35a13e328e4';
   
let newsHtml = "";

console.log("sab kuch good hai");

function getData() {

    fetch(url1).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        data.articles.forEach(articles => {
         

            let news = `<div class="card">
                        <img  class="imaGe" src="${articles.urlToImage}" alt="Sorry !! Image not Available"/>
                        <div class="cardInfo">
                        <h6><a href="${articles.url}" target="_blank" title="Read the full article">${articles.title}</a></h6>
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
        document.getElementsByClassName('cards-Container').innerHTML = 
        `
            <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        `
        console.log(err, "error hai jana");
    })
}

getData();

let newsHtml1 = "";
 
function gettopData() {

    fetch(url2).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        data.articles.forEach(articles => {
            
        

            let news = `<div class="card2">
                        <div class="cardInfo2">
                        <h6><a href="${articles.url}" target="_blank" title="Read the full article">${articles.title}</a></h6>
                        <hr>
                        <p style={{color:"#d3d3d3"}}>${articles.description}</p>
                        
                            <span class="postThumbnail1">${articles.author}</span>
                            <span class="postThumbnail2">${articles.publishedAt}</span>
                        
                        </div>
                    </div>
                `;
        newsHtml1 += news;
        })
        topnewsAccordion.innerHTML = newsHtml1;
    }).catch((err) => {
        document.getElementsByClassName('topnewsContainer').innerHTML = 
        `
            <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        `
        console.log(err, "error hai jana");
    })
}

gettopData();

