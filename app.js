

var get = function(url){
  var articles = [];
  fetch(url)
    .then(blob => blob.json())
    .then(data => articles.push(...data.articles))
  return articles;
}

var get_news = function(){
  var url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=863568bbc54c4167b5dab0f1396b1902";
  articles = get(url);

  articles.map(createArticle);


 
}

var createArticle = function(article){


    area = document.createElement('article');
    title = document.createElement('h2');
    source = document.createElement('span');
    date = document.createElement('span');
    url = document.createElement('span');
    img = document.createElement('img');
    desc = document.createElement('p');
    content = document.createElement('p');

    title.innerHTML = article.title;
    desc.innerHTML = article.description;

    area.appendChild(title);
    area.appendChild(desc);

    document.querySelector('main').appendChild(area);


}

get_news();







