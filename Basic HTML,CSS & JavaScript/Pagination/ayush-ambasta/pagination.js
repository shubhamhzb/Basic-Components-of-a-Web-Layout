let pointer=document.getElementsByClassName('page-pointer');
let numArr=document.getElementsByClassName('page');
let pgContent=document.getElementsByClassName('page-content');
let activepg=1;

showPage(activepg);

for(let i=0;i<pointer.length;i++){
    pointer[i].addEventListener('click',function(){
        let data=this.getAttribute('id');
        if(data=="left"){
            let number=parseInt(numArr[0].innerText);
            if(number!=1){
                for(let j=0;j<numArr.length;j++){
                    number=parseInt(numArr[j].innerText);
                    numArr[j].innerText=number-1;
                }
                showPage(activepg);
            }
        }else{
            let number1=parseInt(numArr[numArr.length-1].innerText);
            if(number1!=5){
                for(let j=0;j<numArr.length;j++){
                    number=parseInt(numArr[j].innerText);
                    numArr[j].innerText=number+1;
                }
                showPage(activepg);
            }
        }
    })
}

for(let i=0;i<numArr.length;i++){
    numArr[i].addEventListener('click',function(){
        activepg=parseInt(numArr[i].innerText);
        showPage(activepg);
    })
}

function showPage(n){
    for(let j=0;j<pgContent.length;j++){
        pgContent[j].style.display="none";
    }
    for(let j=0;j<numArr.length;j++){
        if(parseInt(numArr[j].innerText)==n){
            numArr[j].className+=" active";
        }else{
            numArr[j].className=numArr[j].className.replace("active","");
        }
    }
    pgContent[n-1].style.display="block";
}