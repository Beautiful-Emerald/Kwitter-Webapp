function add_User(){
var user_Name= document.getElementById("user_name").value;
localStorage.setItem("user-name",user_Name);
window.location="kwitter_room.html";
}