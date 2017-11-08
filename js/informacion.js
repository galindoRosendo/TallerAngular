function peticionGET(){
var slbOptions = document.getElementById("slbOptions").value;
var slbIds = document.getElementById("slbIds").value;
var urlNew= "https://swapi.co/api/" + slbOptions + "/" +slbIds;

$.ajax({
  type: "GET",
  dataType: 'jsonp',
  url: urlNew,
  data: {},
  success: function(res){
    console.log(res);
  }
});
}
