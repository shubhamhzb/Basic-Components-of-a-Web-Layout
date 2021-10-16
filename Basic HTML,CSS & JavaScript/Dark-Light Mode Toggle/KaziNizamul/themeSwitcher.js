window.onload = setTheme();

function setTheme() { 
  const chk = document.getElementById('chk');

  // initial load of theme , setting it as white 
  if (localStorage.length === 0) { 
    localStorage.setItem('theme', 'white');
  }
  // 
  else {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.toggle('dark');
    }
  }


  chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    if (localStorage.getItem('theme') === 'white') localStorage.setItem('theme', 'dark');
    else localStorage.setItem('theme', 'white');

  });


}
  
