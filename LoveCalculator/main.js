var user = prompt("Enter your name");
var partner = prompt("Enter your partner's name")
var n = Math.random();
n = Math.ceil(n * 100);
alert("You are " + n + " % compatible!");

if (n >= 70){
    alert('You are mostly compatible');
    } else if (n >50 || n <70){
        alert('You are somewhat compatible')
    } else {
            alert('congrats!')
        }
