function myFunction(){
    var x;
    if (confirm("Choose OK if you read everything.") == true) {
        x = "You pressed Yes.";
    } else {
        x = "That's rude. You should read everything.";
    }
    document.getElementById("demo").innerHTML = x;
}
