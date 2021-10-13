let slideArr=document.getElementsByClassName('slides');
let btn=document.getElementsByClassName('pointer');
let slideIndex=0;
show(slideIndex);
automatic();

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let data=this.getAttribute('id');
        if(data=="left"){
            show(slideIndex-=1);
        }else{
            show(slideIndex+=1);
        }
    });
}

function show(n){
    if(n>slideArr.length-1){
        slideIndex=0;
    }
    if(n<0){
        slideIndex=(slideArr.length-1);
    }
    for(let i=0;i<slideArr.length;i++){
        slideArr[i].style.display="none";
    }
    slideArr[slideIndex].style.display="block";
}

function automatic(){
    for(let i=0;i<slideArr.length;i++){
        slideArr[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slideArr.length){
        slideIndex=1;
    }
    slideArr[slideIndex-1].style.display="block";
    setTimeout(automatic,3000);
}
