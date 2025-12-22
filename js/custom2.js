var sett = {
    "url": "https://covid-india-api.herokuapp.com/api",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(sett).done(function (response) {
    console.log(response);
  });