let arr=document.querySelectorAll(".list .group .w1 li");
for(let i=0;i<arr.length;i++){
   arr[i].style.backgroundImage=`url(images/list/new/${i+1}.png)`;
}

let arr1=document.querySelectorAll(".list .group .w2 li");
for(let i=0;i<arr1.length;i++){
   arr1[i].style.backgroundImage=`url(images/list/upload/${i+1}.png)`;
}

let list=document.querySelectorAll(".list .group");
for(let i=0;i<list.length;i++){
    list[i].onmouseover=function(){
        list[i].querySelector(".list1").style.opacity="1";
        list[i].querySelector(".list1").style.height="auto";
        list[i].querySelector(".arrow").style.backgroundImage="url(images/list/arrowup.png)";
    }
    list[i].onmouseout=function(){
        list[i].querySelector(".list1").style.opacity="0";
        list[i].querySelector(".list1").style.height="0";
        list[i].querySelector(".arrow").style.backgroundImage="url(images/list/arrowdown.png)";
    }
}