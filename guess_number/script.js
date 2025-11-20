let randomNumber = Math.random()*100
randomNumber= Math.ceil(randomNumber)
function guessthenumber(){
    let currentValue = document.getElementById("user_input").value
    currentValue = parseInt(currentValue)
    if(currentValue == randomNumber){
        document.getElementById("message").textContent = "Your guessing Number is correct !"
        document.getElementById("message").style.color = "darkgreen"
    } else if(currentValue > randomNumber){
        document.getElementById("message").textContent = "Your guessing Number is Too High...!"
    }else if(currentValue<randomNumber){
        document.getElementById("message").textContent = "Your guessing Number is Too Low...!"
    }else{
        document.getElementById("message").textContent = "Please Enter Valid Number"
    }
}



// document.getElementById("container").style.backgroundColor="blue"
// document.getElementById("container").style.fontSize="5px"
// let randomNumber =Math.random()*100
// randomNumber=Math.ceil(randomNumber)
// function Guessthenumber(){

//     let currentValue=document.getElementById("user_input").value
   
//     currentValue=parseInt(currentValue)

//     if(currentValue==randomNumber){
//         document.getElementById("message").textContent="Your guessing number is correct!"
//     }else if(currentValue>randomNumber){
//          document.getElementById("message").textContent="Your guessing number is Too high Try Again!"
//     }else if(currentValue<randomNumber){
//           document.getElementById("message").textContent="Your guessing number is Too low Try Again!"
//     }else{
//         document.getElementById("message").textContent="please eneter a valid input"
//     }

// }