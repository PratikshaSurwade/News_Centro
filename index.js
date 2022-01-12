console.log("This is my index js file");

// Initialize the news api parameters
// let source = 'the-times-of-india';
// let apiKey = '55f9f9b698ee412c88a4a35a13e328e4';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=55f9f9b698ee412c88a4a35a13e328e4`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Error to Console  !!! ")
    }
}

xhr.send();

/*
state={
    postList:[],
}
componentDidMount(){
    axioms.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
        console.log(response.data);
        this.setState({
            postList: response.data,
        })

    })
    .catch((error)=>
        console.log(error))
        console.log("fetching data")
}
render(){
    return(
        <>
            <h1>App</h1>
            {this.state.postList.map(
                (item)=>(
                    <div key={item.id}>
                        <h3>{item.userId}</h3>
                        <h4>{item.id}</h4>
                        <p>{item.title}</p>
                        <h6>{item.completed}</h6>

                    </div>
                )
            )}
        </>
    )
}
}

export default App;

*/
