
  
  const channelIcon = document.getElementById('channelIcon');
  const popupMenu = document.getElementById('popupMenu');

  
  channelIcon.addEventListener('click', function (event) {
    event.stopPropagation(); 
    popupMenu.style.display = 
      (popupMenu.style.display === 'block') ? 'none' : 'block';
  });

  // When clicking anywhere else → hide popup
  document.addEventListener('click', function (event) {
    if (!popupMenu.contains(event.target) && !channelIcon.contains(event.target)) {
      popupMenu.style.display = 'none';
    }
  });
