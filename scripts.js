
// challenge 1
// number to test: 1000
var prob1 = function(prob1num){
  var total = 0;
  for (var i = 0; i < prob1num; i++){
  	if( i % 3 === 0 ) {
    		total += i;
    	} else if( i % 5 === 0 ) {
    		total += i;
    	} else {
    		total += 0;
    	}
  }
  document.getElementById('prob1answer').innerHTML = total;
};

// challenge 2
// number to test: 4000000
var prob2 = function(prob2num){
  var previousNum = 1;
  var currentNum = 1;
  var newNum = 0;
  var sum = 0;
  while (newNum < prob2num) {
   	if(newNum % 2 === 0){ 
   		sum += newNum;
   	}
   	newNum = previousNum + currentNum;
   	previousNum = currentNum;
   	currentNum = newNum;
  }
  document.getElementById('prob2answer').innerHTML = sum;
};

// challenge 3
// number to test: 600851475143
var prob3 = function(prob3num){  
  var theNum = prob3num;
  var primes = [];
  var half = Math.floor(Math.sqrt(theNum));
  for (var i = 2; i <= half; i++) {
  	if ( theNum % i === 0 ){
  		primes.push(i);
  		theNum /= i;
  	}
  }
  document.getElementById('prob3answer').innerHTML = primes[primes.length - 1];
};



var revealAnswer = function(theId, btn) {
  document.getElementById(theId).style.display = "inline-block";
  document.getElementById(btn).disabled = true;
};






