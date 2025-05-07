window.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.querySelector('.settingsBTN');
  const settingsPanel = document.getElementById('settingsPanel');
  const sidebar = document.querySelector('aside');
  const filters = document.querySelectorAll('.filter');
  const backgrounds = document.querySelectorAll('.bg');
  const toggleImage = document.getElementById('toggleImage');
  const sidebarImages = document.querySelectorAll('.sidebar-img');
  const dash = document.querySelector('.dash');

  
  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
  });


  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('selected'));
      filter.classList.add('selected');

      const color = filter.style.backgroundColor;

      dash.style.backgroundColor = color;

      localStorage.setItem('dashColor', color);
      localStorage.removeItem('sidebarBackground');
      localStorage.removeItem('sidebarColor'); 
    });
  });

  
  backgrounds.forEach(bg => {
    bg.addEventListener('click', () => {
      backgrounds.forEach(b => b.classList.remove('selected'));
      bg.classList.add('selected');
  
      const isDark = bg.classList.contains('dark');
      const bgColor = isDark ? '#333' : '#ececec';
      const textColor = isDark ? '#fff' : '#000';
  
      sidebar.style.backgroundColor = bgColor;
      sidebar.style.backgroundImage = 'none';
  
      sidebar.querySelectorAll('span, h2, li').forEach(el => {
        el.style.color = textColor;
      });
  
      localStorage.setItem('sidebarBackground', isDark ? 'dark' : 'light');
      localStorage.removeItem('sidebarColor');
    });
  });
  

  
  toggleImage.addEventListener('change', () => {
    const show = toggleImage.checked;
    const selectedImg = document.querySelector('.sidebar-img.selected');

    if (show && selectedImg) {
      sidebar.style.backgroundImage = `url(${selectedImg.src})`;
    } else {
      sidebar.style.backgroundImage = 'none';
    }

    localStorage.setItem('showSidebarImage', show);
  });

  
  sidebarImages.forEach(img => {
    img.addEventListener('click', () => {
      sidebarImages.forEach(i => i.classList.remove('selected'));
      img.classList.add('selected');
  
      
      backgrounds.forEach(b => b.classList.remove('selected'));
      sidebar.style.backgroundColor = '';
      localStorage.removeItem('sidebarBackground');
  
      if (toggleImage.checked) {
        sidebar.style.backgroundImage = `url(${img.src})`;
      }
  
      localStorage.setItem('sidebarImageSrc', img.src);
    });
  });

  
  const savedDashColor = localStorage.getItem('dashColor');
  if (savedDashColor) {
    dash.style.backgroundColor = savedDashColor;


    filters.forEach(f => {
      f.classList.toggle('selected', f.style.backgroundColor === savedDashColor);
    });
  }

  const savedBg = localStorage.getItem('sidebarBackground');
  if (!savedDashColor && savedBg) {
    const color = savedBg === 'dark' ? '#333' : '#ececec';
    sidebar.style.backgroundColor = color;
    backgrounds.forEach(b => {
      b.classList.toggle('selected', b.classList.contains(savedBg));
    });
  }

  const showImage = localStorage.getItem('showSidebarImage') === 'true';
  toggleImage.checked = showImage;

  const savedImage = localStorage.getItem('sidebarImageSrc');
  if (savedImage) {
    sidebarImages.forEach(img => {
      img.classList.toggle('selected', img.src === savedImage);
    });

    if (showImage) {
      sidebar.style.backgroundImage = `url(${savedImage})`;
    }
  }
});




