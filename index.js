// function myFunction() {
//     document.getElementById("box1").style.color = "red";
//     document.getElementById("box4").style.rotate="70deg";
// };
// let keyFrames = "@keyframes rotation {\
//     from {\
//       transform: rotate(0deg);\
//     }\
//     to {\
//       transform: rotate(359deg);\
//     }\
//   }"
// function anotherFn() {
//     document.getElementById("box6").style.animation = "rotation 4s infinite liner"+`${keyFrames}`; 
//     document.getElementById("box6").style = `${keyFrames}`;
// }

var para = [
    'Where are you searching..',
    'I am here..',
    'Can\'t you see..',
    'Catch me if you can..',
    'You can\'t catch me..',
    'I am going now..',
    'Don\'t give up..',
    'Time to run after me',
    'Try again..',
    'You can do it..'
]

// var randomnumber = Math.floor(Math.random() * (para.length));
function box1() {
    var randomnumber = Math.floor(Math.random() * (para.length));

    //    document.getElementById("box2").innerHTML = para[randomnumber];
    document.getElementById("box6").style.backgroundColor = "green";
    document.getElementById("box4").style.backgroundColor = "violet";
    document.getElementById("box2").style.backgroundColor = "gold";
    document.getElementById("box3").style.backgroundColor = "red";
    document.getElementById("box1").style.backgroundColor = "pink";
    document.getElementById("box5").style.backgroundColor = "orange";
    document.getElementById("box4").style.color = "green";
    document.getElementById("box6").style.color = "violet";
    document.getElementById("box5").style.color = "black";
    document.getElementById("box3").style.color = "purple";
    document.getElementById("box1").style.color = "orange";
    document.getElementById("box2").style.color = "white";
document.getElementById("box6").innerHTML = para[randomnumber];
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
}
function box2() {
    var randomnumber = Math.floor(Math.random() * (para.length));
    document.getElementById("box5").style.backgroundColor = "green";
    document.getElementById("box4").style.backgroundColor = "violet";
    document.getElementById("box6").style.backgroundColor = "gold";
    document.getElementById("box2").style.backgroundColor = "red";
    document.getElementById("box1").style.backgroundColor = "pink";
    document.getElementById("box3").style.backgroundColor = "orange";
    document.getElementById("box6").style.color = "black";
    document.getElementById("box4").style.color = "skyblue";
    document.getElementById("box5").style.color = "yellow";
    document.getElementById("box3").style.color = "white";
    document.getElementById("box1").style.color = "tomato";
    document.getElementById("box2").style.color = "blue";
    document.getElementById("box5").innerHTML = para[randomnumber];
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box6").innerHTML = "";

}
function box3() {
    var randomnumber = Math.floor(Math.random() * (para.length));
    document.getElementById("box1").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "violet";
    document.getElementById("box2").style.backgroundColor = "gold";
    document.getElementById("box3").style.backgroundColor = "red";
    document.getElementById("box4").style.backgroundColor = "pink";
    document.getElementById("box6").style.backgroundColor = "orange";
    document.getElementById("box4").style.color = "black";
    document.getElementById("box5").style.color = "skyblue";
    document.getElementById("box6").style.color = "yellow";
    document.getElementById("box1").style.color = "white";
    document.getElementById("box2").style.color = "tomato";
    document.getElementById("box3").style.color = "blue";
    document.getElementById("box1").innerHTML = para[randomnumber];
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";

}
function box4() {
    var randomnumber = Math.floor(Math.random() * (para.length));
    document.getElementById("box2").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "violet";
    document.getElementById("box3").style.backgroundColor = "gold";
    document.getElementById("box4").style.backgroundColor = "red";
    document.getElementById("box1").style.backgroundColor = "orange";
    document.getElementById("box6").style.backgroundColor = "pink";
    document.getElementById("box1").style.color = "black";
    document.getElementById("box2").style.color = "skyblue";
    document.getElementById("box3").style.color = "yellow";
    document.getElementById("box3").style.color = "white";
    document.getElementById("box5").style.color = "tomato";
    document.getElementById("box6").style.color = "blue";
    document.getElementById("box2").innerHTML = para[randomnumber];
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";

}
function box5() {
    var randomnumber = Math.floor(Math.random() * (para.length));
    document.getElementById("box3").style.backgroundColor = "green";
    document.getElementById("box2").style.backgroundColor = "violet";
    document.getElementById("box6").style.backgroundColor = "gold";
    document.getElementById("box5").style.backgroundColor = "red";
    document.getElementById("box1").style.backgroundColor = "orange";
    document.getElementById("box4").style.backgroundColor = "pink";
    document.getElementById("box3").style.color = "black";
    document.getElementById("box1").style.color = "skyblue";
    document.getElementById("box6").style.color = "yellow";
    document.getElementById("box2").style.color = "white";
    document.getElementById("box4").style.color = "tomato";
    document.getElementById("box5").style.color = "blue";
    document.getElementById("box3").innerHTML = para[randomnumber];
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";

}
function box6() {
    var randomnumber = Math.floor(Math.random() * (para.length));
    document.getElementById("box4").style.backgroundColor = "green";
    document.getElementById("box2").style.backgroundColor = "violet";
    document.getElementById("box1").style.backgroundColor = "gold";
    document.getElementById("box6").style.backgroundColor = "red";
    document.getElementById("box5").style.backgroundColor = "pink";
    document.getElementById("box3").style.backgroundColor = "orange";
    document.getElementById("box2").style.color = "black";
    document.getElementById("box1").style.color = "skyblue";
    document.getElementById("box3").style.color = "yellow";
    document.getElementById("box6").style.color = "white";
    document.getElementById("box5").style.color = "tomato";
    document.getElementById("box4").style.color = "blue";
    document.getElementById("box4").innerHTML = para[randomnumber];
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
}

