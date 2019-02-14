


var get = function(search){

    url = "https://fr.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&limit=8";

    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(json) {
            research(json);
            }
        });
}

var research = function(json){


            var container = document.createElement('div');
            container.className = "container"

          for(var i = 0; i < json[1].length; i++){

            var result = document.createElement('div');
            result.className = "result";

            var title = document.createElement('h2');
            title.innerHTML = json[1][i]

            var link = document.createElement('span');
            link.className = "link";
            link.innerHTML = json[3][i]

            var para = document.createElement('p');
            para.innerHTML = json[2][i]

            result.appendChild(title);
            result.appendChild(link);
            result.appendChild(para);
              
            container.appendChild(result);
              
          }

        document.querySelector('main').innerHTML = "";
        document.querySelector('main').appendChild(container);

    }  


$(function(){
    $('input').keyup(function(){
        document.querySelector('main').innerHTML = "";
        get($(this).val());
    });
});

// var get = function(url){
//     xhr = new window.XMLHttpRequest()
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             wiki = document.createElement('div');
//             wiki.innerHTML = xhr.responseText;
//             tab = wiki.querySelector('.infobox_v2')
//             document.querySelector('main').innerHTML = tab.innerHTML;
//         }
//     }
//     xhr.open('GET', url, true)
//     xhr.send()
// }

// get("https://fr.wikipedia.org/api/rest_v1/page/html/Python_(langage)")

// Get first para https://fr.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Python_(langage)
