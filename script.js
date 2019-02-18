


var get = function(search, global=false){

    if(global){
      var url = "https://fr.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&limit=8";
    }else{
      var url = "https://fr.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="+search+"";
    }
    
    $.ajax({

        url: url,
        dataType: 'jsonp',
        success: function(json) {
          if(global){
            research(json);
          }else{
            more(json)
          }
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

            var link = document.createElement('a');
            link.className = "link";
            link.innerHTML = "https://fr.wikipedia.org/wiki/"+json[1][i]
            link.href = json[3][i]

            var para = document.createElement('p');
            para.innerHTML = json[2][i]

            result.appendChild(title);
            result.appendChild(link);
            result.appendChild(para);
              
            container.appendChild(result);
              
          }

        document.querySelector('main').innerHTML = "";
        document.querySelector('main').appendChild(container);

        $(function(){
          $('h2').click(function(){
            get($(this).text(), false);
          });
        })
        

    }  

var more = function(json){
  var arr = Object.keys(json["query"]["pages"]).map((key) => [key, json["query"]["pages"][key]]);
  arr = arr[0][1]['extract'];
  document.querySelector('aside').innerHTML = '<p class="more">'+arr+'</p>';

}


$(function(){
    $('input').keyup(function(){
        document.querySelector('main').innerHTML = "";
        get($(this).val(), true);
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


