let check=document.getElementById('check');


let stored=localStorage.getItem('mode');

if(stored){
    document.body.className='dark-mode';
    check.checked=true;
    check.addEventListener('change',function(){
        if(check.checked){
            document.body.className='dark-mode'
        }else{
            document.body.classList.remove('dark-mode');
            localStorage.removeItem('mode');
        }
    });
}else{
    check.addEventListener('change',function(){
        if(check.checked){
            document.body.className='dark-mode'
            localStorage.setItem('mode','dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
            localStorage.removeItem('mode');
        }
    });
}
