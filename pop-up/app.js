

function openPopup() {
    var notifyPanel = document.getElementById("popup");
     notifyPanel.style.display = (notifyPanel.style.display === "block") ? "none" : "block";
     notifyPanel.style.top = (notifyPanel.style.top === '50%')? '0' : '50%';
     notifyPanel.style.transform = (notifyPanel.style.transform === 'translate(-50%, -50%)scale(1)')? "translate(-50%, -50%)scale(0.1)" : "translate(-50%, -50%)scale(1)"
   }

   function closePopup() {
    var notifyPanel = document.getElementById("popup");
     notifyPanel.style.display = (notifyPanel.style.display === "block") ? "none" : "block";
     notifyPanel.style.top = (notifyPanel.style.top === '50%')? '0' : '50%';
     notifyPanel.style.transform = (notifyPanel.style.transform === 'translate(-50%, -50%)scale(1)')? "translate(-50%, -50%)scale(0.1)" : "translate(-50%, -50%)scale(1)"
   }