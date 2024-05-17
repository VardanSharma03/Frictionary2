//<li class="l2"><img style=" width: 120px; filter: blur(1px);" class="ghost" src="creepy-ghost_12394.png"></li>
//http://getwallpapers.com/wallpaper/full/c/5/1/1019935-haunted-house-wallpaper-2000x1333-for-phone.jpg


function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("toggle_btn1").addEventListener("click",e=>{
    console.log("vardan")
    var dropdownMenu = document.getElementById("dropdown_menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
});