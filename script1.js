//initializing variable for the random number
var y= Math.floor(Math.random() *100)+1;
//variable for guess 
var guess= 1
var lim= 10
console.log(y)
//console.log(guess)
//input from the field
document.getElementById("submit_btn").onclick=function(){
     let x= document.getElementById("guessednumber").value
    if(x==y && guess<lim ){
        alert("CONGRATS THE NUMBER WAS CORRECTLY GUESSED IN "+guess+" GUESSES")
  }
    else if(x>y && guess<lim){
        alert("Try a smaller number")
        guess++
    }
    else if (x<y && guess<lim){
        alert("Try a greater number")
        guess++
    }
    
    else{
        alert("Out of guessses, The number was "+y)
    }
}
