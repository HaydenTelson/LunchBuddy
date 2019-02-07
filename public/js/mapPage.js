$(document).ready(function() {
    console.log("It's initializing!")
	initializePage();
})
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function initializePage(){
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    $("button.dropbtn").click(myFunction);
    function myFunction()
    {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    $("button.openbtn").click(openNav);
    function openNav()
    {
    document.getElementById("mySidepanel").style.width = "250px";   
    }

    $("a.closebtn").click(closeNav);
    function closeNav()
    {
    document.getElementById("mySidepanel").style.width = "0"; 
    }
}
