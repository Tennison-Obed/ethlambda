
function tableload(listObj) {
    let count=1;
    $.each(listObj, function (indexInArray, valueOfElement) { 
         $("#stateListTable tbody").append(
             '<tr><th scope="row">'+count+'</th><td>'+indexInArray+'</td><td>'+valueOfElement+'</td><td><button class="btn distTableBtn" data-toggle="modal" data-target="#exampleModal">Click</button></td></tr>'
         );count++;
    });
}
//popups

function popuptableload(listObj,headername) {
    let count=1;    
    $("#districtListTable tbody").empty();
    $("#exampleModalLabel").text(headername);
    $.each(listObj, function (indexInArray, valueOfElement) { 
         $("#districtListTable tbody").append(
             '<tr><th scope="row">'+count+'</th><td>'+indexInArray+'</td><td>'+valueOfElement+'</td></tr>'
         );count++;
    });}

   
