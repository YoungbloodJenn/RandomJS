// while the value of the variable counter is greater than 0, keep counting down.
// if counter is = 1 - log ignition
// if counter is = 0 - stop loop and blast off! 

var counter = 5;
while (counter > 0){
    console.log(counter);
    if (counter == 1) {
        console.log('Ignition!');
    }
        counter = counter - 1
    }
console.log ("blast off!");