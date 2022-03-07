let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
        integer += 1;
        int.innerHTML = integer;
})
remove.addEventListener('click', function() {
    if(integer<=0) {console.log("Can't be lower than 0")}
    else {
        integer -= 1;
        int.innerHTML = integer;
    }
    
}) 