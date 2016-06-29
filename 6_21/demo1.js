function demofunc(){
  var txt = document.getElementById("txt").value;
  try{
    if(txt == ""){
      throw "这是一个错误"
    }
    alert(txt);
}catch(err){
  alert(err);
}
}

function onOver(ooj){
  ooj.innerHTML = "hello over";
}

function onLeft(ooj){
  ooj.innerHTML = "world left";

}
function changeColor(ooj){
  ooj.style.background="red";
}
function changeColor2(ooj){
  ooj.style.background="blue";
}
