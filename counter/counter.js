document.getElementById("counter-heading").style.color="blue"
function increment(){
    let value =document.getElementById("counter-value").textContent
    value=parseInt(value)

    let count = document.getElementById("counter-value").textContent=value+1
    count=parseInt(count)
    if(count>0){
        document.getElementById("counter-value").style.color="green"
    }
    else if(count<0){
        document.getElementById("counter-value").style.color="red"
    }
    else{
        document.getElementById("counter-value").style.color="black"
    }
}

function decrement(){
    let value =document.getElementById("counter-value").textContent
    value=parseInt(value)

    let count = document.getElementById("counter-value").textContent=value-1
    count=parseInt(count) 
    if(count>0){
        document.getElementById("counter-value").style.color="green"
    }
    else if(count<0){
        document.getElementById("counter-value").style.color="red"
    }
    else{
        document.getElementById("counter-value").style.color="black"
    }
}
function reset(){
    document.getElementById("counter-value").textContent=0
    document.getElementById("counter-value").style.color="black"
}