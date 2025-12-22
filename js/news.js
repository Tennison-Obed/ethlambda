
var url = 'http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=01809f8499d345ba804c9212e491970e';
    
var req = new Request(url);
var objctNews; 
function getnewObj(){
     
};
fetch(req).then(function (res){
    res.json().then(function (val) { 
        let newsObj=val.articles;
        $.each(newsObj, function (indexInArray, valueOfElement) { 
            generatenews(valueOfElement);
        });
    })
    
})

