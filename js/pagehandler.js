$("#Page2HTML").load('page2.html');
$("#Page3HTML").load('page3.html');
$("#DistrictPopup").load('districtpopUp.html');

$("#Page2HTML").fadeOut();
$("#Page3HTML").fadeOut();
$("#Page1HTML").fadeIn();
$(".nav-item").on("click",function () {
    $("#navbarSupportedContent").removeClass('show');
})
$("#page1button").on('click',function() {
    $("#Page1HTML").siblings().fadeOut();
    $('#page1button').siblings().removeClass('active'); 
    $('#page1button').addClass('active');   
    $("#Page1HTML").fadeIn(1500);
})
// $("#page2button").on('click',function() {
//     $("#Page1HTML").fadeOut();
//     $("#Page3HTML").fadeOut();
//     $("#Page2HTML").fadeIn(1500);
// })
$("#page3button").on('click',function() {
    $('#page3button').addClass('active'); 
    $('#page3button').siblings().removeClass('active'); 
    $("#Page3HTML").siblings().fadeOut();
    $("#Page3HTML").fadeIn(1500);
})
//new page generator
function generatenews(arryObj){
let newstitle=arryObj.title;
let newsAuthor=arryObj.author;
let newscnt=arryObj.content;
let newsdec=arryObj.description;
let newstime=arryObj.publishedAt;
let newsurl=arryObj.url;
let newsImage=arryObj.urlToImage;

var htmlcont='<section class="newsBlock">'+
'<header><h2>'+newstitle+'</h2></header><hr><article><div class="newsArtCont"><p>'+newscnt+'</p></div><figure>'+
            '<img src="'+newsImage+'" alt="newsImage"><descrip><header><h5>Description</h5></header><p>'+newsdec+'</p>'+
'</descrip></figure></article><hr><footer><author>'+newsAuthor+'</author><time>'+newstime+'</time>'+
'<a href="'+newsurl+'" class="btn btn-info" target="_blank">Know More</a></footer></section>';


$('#newsPage').append(htmlcont);
}