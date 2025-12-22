var settings = {
  "url": "https://api.covid19india.org/state_district_wise.json",
  "method": "GET",
  "timeout": 0,
};
var states;
///main window ready function starts
$(window).ready
  (
    function loadAjax() {
      var dislist;
      var stateTotal;
      $.ajax(settings).done(function (res) {
        states = res;        
        dislist = new Object(states.length);
        stateTotal = new Object(states.length);
        $.each(states, function (state, stateObj) {
          dislist[state] = getdistotal(stateObj.districtData);
        });
        $.each(dislist, function (indexInArray, valueOfElement) {
          stateTotal[indexInArray] = StateTotal(valueOfElement);
        });
        var sortedObject=descenSortToArray(stateTotal);
        var totalCount=0;
        $.each(stateTotal, function (indexInArray, valueOfElement) { 
           totalCount+=valueOfElement;
        });
        
        var percentageCount1=Math.floor(((sortedObject.asNum[sortedObject.asState.length-1])/totalCount)*100);
        var percentageCount2=Math.floor(((sortedObject.asNum[sortedObject.asState.length-2])/totalCount)*100);
        var percentageCount3=Math.floor(((sortedObject.asNum[sortedObject.asState.length-3])/totalCount)*100);
        
        $(" #topList h1 .num").numScroll({
          number: totalCount
        });        
        $("#FirstChart svg text").html(percentageCount1+'%');
        $("#firstCirclePath").attr('stroke-dasharray',percentageCount1+',100');
        $("#FirstChart .TopDescrption header h4").text(sortedObject.asState[sortedObject.asState.length-1]);
        $("#SecondChart svg text").html(percentageCount2+'%');
        $("#SecondChart .TopDescrption header h4").text(sortedObject.asState[sortedObject.asState.length-2]);
        $("#secndCirclePath").attr('stroke-dasharray',percentageCount2+',100');
        $("#ThirdChart svg text").html(percentageCount3+'%');
        $("#ThirdCirclePath").attr('stroke-dasharray',percentageCount3+',100');
        $("#ThirdChart .TopDescrption header h4").text(sortedObject.asState[sortedObject.asState.length-3]);
        $("#FirstChart .TopDescrption article p span").text(''+sortedObject.asNum[sortedObject.asState.length-1]);
        $("#SecondChart .TopDescrption article p span").text(''+sortedObject.asNum[sortedObject.asState.length-2]);
        $("#ThirdChart .TopDescrption article p span").text(''+sortedObject.asNum[sortedObject.asState.length-3]);
        tableload(stateTotal);
        $("#districtTriggerBtn").on("click",function ()
        {
          let dnam=$("#districtInput").val();
          
                
          popuptableload(dislist[dnam],dnam);
       
       })
       $('.distTableBtn').on("click",function () {
         
         let disname=$(this.parentElement.parentElement.children[1]).text();
 
         popuptableload(dislist[disname],disname);
         
       });

      });
     let newObjct=getnewObj();
    //  console.log(newObjct);
    }
  );
//main funtion ends

//sort descending and convert to array
function descenSortToArray(arryObjct) {
  const len=Object.keys(arryObjct).length;
  var arrRig=new Array(len);
  var arrylft=new Array(len);  
  var count=0;
  $.each(arryObjct, function (indexInArray, valueOfElement) { 
    arrylft[count]=indexInArray;
    arrRig[count]=valueOfElement;
    count++;
  });
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arrRig[i]<arrRig[j]) {
        let temp=arrRig[i];
      arrRig[i]=arrRig[j];
      arrRig[j]=temp;
      temp=arrylft[i];
      arrylft[i]=arrylft[j];
      arrylft[j]=temp;
      }     
    }    
  }
  var ojjArry={
    asState:arrylft,
    asNum:arrRig
  }
  return ojjArry;
 }


//desending ends
function StateTotal(StateArray) {
  var statetotal = 0;
  $.each(StateArray, function (staename, staeObj) {
    statetotal+= staeObj;
  });

  return statetotal;
}
function getdistotal(districts) {
  var disTotal = new Object(districts.length);
  $.each(districts, function (district, districtOjb) {
    disTotal[district] = districtOjb.confirmed + districtOjb.delta.confirmed;
  
  });
  return disTotal;
}

//most critiacl states jq


$("#searchBox").on("keyup", function () {

  var temp = $("#searchBox").val().toUpperCase();
  $.each(Object.keys(states), function (indexInArray, valueOfElement) {
 
    if (temp == "") {
      return false;
    } else
      if (valueOfElement.toUpperCase().startsWith(temp)) {
        console.log(valueOfElement);
      }

  }); 

});

//main function autocomplete
$(".stateSearch").on("keyup", function () {
  $(".autocompleteList").css("display", "flex");
  $('.autocompleteList').empty();
  var temp = $(".stateSearch").val().toUpperCase();
  $.each(Object.keys(states), function (indexInArray, valueOfElement) {

    if (temp == "") {

      return false;
    } else
      if (valueOfElement.toUpperCase().startsWith(temp)) {

        $('.autocompleteList').append('<li class="list-group-item "><p>' + valueOfElement + '</p><li>');
      }

  });

});
//main auto coomplet ends
//on choosing autocompete stsrts
$(".autocompleteList").on("click", function (event) {

  $(".stateSearch").val($(event.target).text());
  $(".autocompleteList").css("display", "none");
})
//on choosing autocomplte ends

