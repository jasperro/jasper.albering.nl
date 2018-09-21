document.addEventListener('DOMContentLoaded', function() {
  clss = document.getElementsByClassName("hoverheader");
  for (var i = 0, len = clss.length; i < len; i++) {
    clss[i].addEventListener('mouseover', function() {
      document.getElementById("nightmodecontainer").style.display = "block";
    });
    clss[i].addEventListener('mouseout', function() {
      document.getElementById("nightmodecontainer").style.display = "none";
    });
  };
  document.getElementById("nightcheckbox")
      .addEventListener('change', function() {
        if (this.checked) {
          localStorage.nightmode = 1;
          console.log("Night mode on");
          clss = document.getElementsByClassName('card');
          for (var i = 0, len = clss.length; i < len; i++) {
            clss[i].style.backgroundColor = '#000000';
            clss[i].style.color = '#ffffff';
			 };
        } else {
          localStorage.removeItem("nightmode");
          console.log("Night mode off");
          clss = document.getElementsByClassName('card');
          for (var i = 0, len = clss.length; i < len; i++) {
            clss[i].style.backgroundColor = '#ffffff';
            clss[i].style.color = '#000000';
          };
        }
      });
  if (localStorage.nightmode == 1) {
    document.getElementById('nightcheckbox').checked = true;
    clss = document.getElementsByClassName('card');
    for (var i = 0, len = clss.length; i < len; i++) {
      clss[i].style.backgroundColor = '#000000';
      clss[i].style.color = '#ffffff';
    };
  };
});
