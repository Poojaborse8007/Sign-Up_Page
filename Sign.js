
function check(){

    var u = document.getElementById("user").value 
    var p =document.getElementById("pass").value

    if (u == pooja && p == 1234) {

        window.open = "index.html"
    } else {
        var msg = document.getElementById("two")

        msg.innerHTML="Invalid Id or Password"
        msg.style.color="red";
    }
}