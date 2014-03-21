
//note parseInt
//note stop
var primera = ["Mercal", "Cédula Buen Vivir", "CADIVI", "SICAD"];
var segunda = ["es una maniobra", "es una estrategia","es una artimaña","es una jugada"];
var tercera = ["del castrocomunismo","del ilegítimo","de los echufados","de los chavistas"];
var cuarta = ["para hundir", "para destruir", "para derrumbar", "para devastar"];
var quinta = ["PDVSA","a la clase media","a la empresa privada","al país"];
var count = 0;


function go(){
  addSlots($("#slots_a .wrapper"),primera);
  moveSlots($("#slots_a .wrapper"));
  addSlots($("#slots_b .wrapper"),segunda);
  moveSlots($("#slots_b .wrapper"));
  addSlots($("#slots_c .wrapper"),tercera);
  moveSlots($("#slots_c .wrapper"));
  addSlots($("#slots_d .wrapper"),cuarta);
  moveSlots($("#slots_d .wrapper"));
  addSlots($("#slots_e .wrapper"),quinta);
  moveSlots($("#slots_e .wrapper"));
  count += 1;
  var mensaje = tweet_text(); 
  console.log(mensaje);
  $("#twtrButton iframe").remove();
  var location = document.location.href;
  console.log(location)
  var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', location)
        .attr('data-text', mensaje)
        .attr("data-hashtags","LaSalida,Caprilieber")
        .attr("data-lang","es")
        .attr("data-size","large");
    $('#twtrButton').append(tweetBtn);
    twttr.widgets.load();

}

function tweet_text(){
  var contador = count;
  var message_text = "";
  if(contador == 0) {
    message_text += $("#slots_a .wrapper .slot p").get(contador).innerHTML + " " 
                  + $("#slots_b .wrapper .slot p").get(contador).innerHTML + " " 
                  + $("#slots_c .wrapper .slot p").get(contador).innerHTML + " "
                  + $("#slots_d .wrapper .slot p").get(contador).innerHTML + " "
                  + $("#slots_e .wrapper .slot p").get(contador).innerHTML + ".";
  } else {
    message_text += $("#slots_a .wrapper .slot p").get(contador * 7).innerHTML + " " 
                  + $("#slots_b .wrapper .slot p").get(contador * 7).innerHTML + " " 
                  + $("#slots_c .wrapper .slot p").get(contador * 7).innerHTML + " "
                  + $("#slots_d .wrapper .slot p").get(contador * 7).innerHTML + " "
                  + $("#slots_e .wrapper .slot p").get(contador * 7).innerHTML + ".";
  }
  return message_text;
}

function addSlots(jqo , array){
  for(var i = 0; i < 15; i++){
    var ctr = Math.floor(Math.random()*array.length);
    jqo.append("<div class='slot'><p>"+array[ctr]+"</p></div>");

    
  }
}

function moveSlots(jqo){
    var time = 6500;
    time += Math.round(Math.random()*1000);
  jqo.stop(true,true);

    var marginTop = parseInt(jqo.css("margin-top"), 10)
    
    marginTop -= (7 * 100)
    
  jqo.animate(
    {"margin-top":marginTop+"px"},
    {'duration' : time, 'easing' : "easeOutElastic"});

}

$(document).ready(
function(){
  addSlots($("#slots_a .wrapper"),primera);
  addSlots($("#slots_b .wrapper"),segunda);
  addSlots($("#slots_c .wrapper"),tercera);
  addSlots($("#slots_d .wrapper"),cuarta);
  addSlots($("#slots_e .wrapper"),quinta);
  var mensaje = tweet_text();
  $(".twitter-share-button").attr("data-text",mensaje);
}   
);