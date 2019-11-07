var position = 0;
function carousel(state){
    document.querySelector(".carousel .carousel-body section.active").className = 'prev';
    var tam = document.querySelectorAll(".carousel .carousel-body section").length;
    if (state == 0) {
        if(position >= tam-1)
            position = 0; 
        else 
            position++;
    }
    else {
        if(position == 0)
            position = tam -1;
        else
            position --;
    }
    document.querySelector(".carousel .carousel-body section#P"+position).className = "active"
}
setInterval(function(){
    carousel(0);
},2000)
document.getElementById("proximo").addEventListener("click", function(e){
    e.preventDefault();
    carousel(0);
})
document.getElementById("anterior").addEventListener("click", function(e){
    e.preventDefault();
    carousel(1);
})