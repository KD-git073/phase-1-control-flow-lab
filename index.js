
let scootFeet = 200;
function scuberGreetingForFeet(scootFeet) {
  if (scootFeet <= 400)  {
  return 'This one is on me!'
  } else if  (scootFeet>= 2000 && scootFeet <= 2499) {
  return 'I will gladly take your thirty bucks.'
  } else if (scootFeet >= 2500) {
  return ('No can do.')
  }
  
}

function ternaryCheckCity(city) {
  return (city == 'NYC' ? "Ok, sounds good." : "No go.");
}

//function switchOnCharmFromTip(){
  function switchOnCharmFromTip (tip){
    switch(tip){
      case 'generous' :
        return 'Thank you so much.';
      case 'not as generous' :
        return 'Thank you.';
      default: return 'Bye.';   
    }
  }
//}