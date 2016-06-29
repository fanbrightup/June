var a = [1,2,3,4,5,6];
var j = 0;
document.write("<br/>");

for(;j<3;j++){
  if(j == 3){
    continue;
  }
  document.write(a[j]+"<br/>");
}
