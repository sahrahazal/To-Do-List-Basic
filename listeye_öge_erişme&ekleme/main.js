var wakeup = document.querySelector("#wake-up");
var health = document.querySelector("#health");
for (var i = 0; i < health.length; i++) {
    health[i].style.color = "red";
}

var list = document.querySelector("ul");
var data = document.querySelector("#data");
var add = document.querySelector("#add");

add.addEventListener("click", function(){
    var li = document.createElement("li");
    li.textContent=data.value;
    list.append(li);
    data.value="";
    
})

