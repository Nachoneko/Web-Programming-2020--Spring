var trigger = 0;
function gg(){
    var box = document.createElement("div");
    box.setAttribute("id","box1");
    document.body.appendChild(box);
}
function date(){
   
}
function weekday(){
    var year = [];
    var yeard = document.createElement("div");
    yeard.setAttribute("id","yeard");
    document.getElementById("box1").appendChild(yeard);
    document.getElementById("yeard").style.textAlign = "center";
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var monthd = document.createElement("div");
    monthd.setAttribute("id","monthd");
    monthd.innerHTML =new Date().getFullYear() +" " + month[0];
    document.getElementById("box1").appendChild(monthd);
    document.getElementById("monthd").style.textAlign = "center";

    var week=["Su "," Mo "," Tu "," We "," Th "," Fr "," Sa "];
    
    for(var i=0;i<7;i++){
    var weeknd = document.createElement("div");
    weeknd.innerHTML = week[i];
    weeknd.setAttribute("id","week"+i);
    weeknd.setAttribute("class","kk");
    document.getElementById("box1").appendChild(weeknd);
    }

    for(var i=0; i<31 ; i++){
        var date = document.createElement("div");
        date.setAttribute("id","date"+i);
        date.setAttribute("class","kk");
        date.innerHTML = i+1;
        document.getElementById("box1").appendChild(date);
        }

document.getElementById("monthd").onclick = sar;


 function sar(){
    var deleter = document.getElementById("monthd");
    deleter.parentNode.removeChild(deleter);
    for(var i = 0; i < 31; i++) {
        var deleter = document.getElementById("date"+ i);
        deleter.parentNode.removeChild(deleter);
        if(i < 7){
        var deleter = document.getElementById("week"+ i);
        deleter.parentNode.removeChild(deleter);    
        }    
    }
    yeard.innerHTML = new Date().getFullYear();
    for(var i=0; i<12 ; i++){
        var date = document.createElement("div");
        date.setAttribute("id","monthd"+i);
        date.setAttribute("class","month");
        date.innerHTML = month[i];
        document.getElementById("box1").appendChild(date);
        }
}
var cyear = 2019;
document.getElementById("yeard").onclick = function() {
    ustga();
    jil(cyear);
};
function ustga(){
    var deleter = document.getElementById("yeard");
    deleter.parentNode.removeChild(deleter);
    for(var i = 0; i < 12; i++) {
        var deleter = document.getElementById("monthd"+ i);
        deleter.parentNode.removeChild(deleter);
        
}
}
function jil(cyear){
var yeardd = document.createElement("div");
var up = document.createElement("div"); 
var down = document.createElement("div"); 
up.setAttribute("id","up");
down.setAttribute("id","down");
yeardd.setAttribute("id","yeardd");
document.getElementById("box1").appendChild(yeardd);
document.getElementById("box1").appendChild(up);
document.getElementById("box1").appendChild(down);
var k = 0 ;
for(var i = cyear - 6, k = 0 ; i < cyear + 6 ; i++,k++){
    var yeard = document.createElement("div");
    yeard.setAttribute("id","yeard"+k);
    yeard.setAttribute("class","year");
    year[k]=i;
    
    yeard.innerHTML = year[k];
    document.getElementById("box1").appendChild(yeard);
    }
    console.log(year);
    yeardd.innerHTML = year[0]+"-"+year[11] ;
    up.innerHTML = "^";
    down.innerHTML ="v";
    document.getElementById("up").onclick = function() {
        var deleter = document.getElementById("yeardd");
        deleter.parentNode.removeChild(deleter);
        var deleter = document.getElementById("up");
        deleter.parentNode.removeChild(deleter);
        var deleter = document.getElementById("down");
        deleter.parentNode.removeChild(deleter);
        for(var i = 0; i < 12; i++) {
            var deleter = document.getElementById("yeard"+ i);
            deleter.parentNode.removeChild(deleter);
        }
        jil(year[11]+6);
    };document.getElementById("down").onclick = function() {
        var deleter = document.getElementById("yeardd");
        deleter.parentNode.removeChild(deleter);
        var deleter = document.getElementById("up");
        deleter.parentNode.removeChild(deleter);
        var deleter = document.getElementById("down");
        deleter.parentNode.removeChild(deleter);
        for(var i = 0; i < 12; i++) {
            var deleter = document.getElementById("yeard"+ i);
            deleter.parentNode.removeChild(deleter);
        }       
        jil(year[0]-5);
    };

    var x = document.getElementsByClassName("year");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].onclick = console.log("working");
    }
  
} 


}

window.onload = gg;
document.getElementById("datepicker1").onclick = weekday;