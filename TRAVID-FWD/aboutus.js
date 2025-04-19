let op1=document.querySelector("#op1");
let op2=document.querySelector("#op2");
let op3=document.querySelector("#op3");
let op4=document.querySelector("#op4");
let items=document.querySelectorAll("li");
let screen=document.querySelectorAll("iframe");
let weather=document.querySelector("#weather");
let sports=document.querySelector("#sports");
let occasion=document.querySelector("#occasion");
let festivals=document.querySelector("#festivals");
let back=document.querySelector("#back");

back.onclick=()=>{
    screen[0].style.display="none"
    screen[1].style.display="none"
    screen[2].style.display="none"
    screen[3].style.display="none"
    sports.style.display="block";
    occasion.style.display="block";
    festivals.style.display="block";
    weather.style.display="block";
    op1.style.display="none"; 
    back.style.display="none";
    op2.style.display="none";  
    sports.style.left="530px";
    op3.style.display="none";  
    occasion.style.left="930px";
    occasion.style.top="-640px";
    op4.style.display="none";  
    festivals.style.left="1320px";
    festivals.style.top="-640px";
}


weather.onclick=()=>{
    back.style.display="block";
    op1.style.display="block";
    sports.style.display="none";
    occasion.style.display="none";
    festivals.style.display="none";
    
    items[0].onclick=()=>{
        screen[0].setAttribute("src","categories.html#monsoon");
        screen[0].style.display="inline-block";
    }
    items[1].onclick=()=>{
        screen[0].setAttribute("src","categories.html#winter");
        screen[0].style.display="inline-block";
    }
    items[2].onclick=()=>{
        screen[0].setAttribute("src","categories.html#summer");
        screen[0].style.display="inline-block";
    }
    items[3].onclick=()=>{
        screen[0].setAttribute("src","categories.html#spring");
        screen[0].style.display="inline-block";
    }
}
sports.onclick=()=>{
    back.style.display="block";
    op2.style.display="inline-block";
    weather.style.display="none";
    occasion.style.display="none";
    festivals.style.display="none";
    sports.style.left="35px";
    screen[1].style.left="420px";
    screen[1].style.top="-900px";
    items[4].onclick=()=>{
        screen[1].setAttribute("src","categories.html#skiing");

        screen[1].style.display="inline-block";
    }
    items[5].onclick=()=>{
        screen[1].setAttribute("src","categories.html#rafting");
        screen[1].style.display="inline-block";
    }
    items[6].onclick=()=>{
        screen[1].setAttribute("src","categories.html#jumping");
        screen[1].style.display="inline-block";
    }
    items[7].onclick=()=>{
        screen[1].setAttribute("src","categories.html#climbing");
        screen[1].style.display="inline-block";
    }
    items[8].onclick=()=>{
        screen[1].setAttribute("src","categories.html#diving");
        screen[1].style.display="inline-block";
    }
    items[9].onclick=()=>{
        screen[1].setAttribute("src","categories.html#skydiving");
        screen.style.display="inline-block";
    }
    items[10].onclick=()=>{
        screen[1].setAttribute("src","categories.html#sanctuary");
        screen[1].style.display="inline-block";
    }
    
}
occasion.onclick=()=>{
    back.style.display="block";
    op3.style.display="inline-block";
    weather.style.display="none";
    sports.style.display="none";
    festivals.style.display="none";
    occasion.style.left="60px";
    occasion.style.top="60px";
    screen[2].style.left="420px";
    screen[2].style.top="-300px";

    items[11].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#anniversary");
        screen[2].style.display="inline-block";
    }
    items[12].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#bday");
        screen[2].style.display="inline-block";
    }
    items[13].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#wedding");
        screen[2].style.display="inline-block";
    }
    items[14].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#propose");
        screen[2].style.display="inline-block";
    }
    items[15].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#selflove");
        screen[2].style.display="inline-block";
    }
    items[16].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#naturelove");
        screen[2].style.display="inline-block";
    }
    items[17].onclick=()=>{
        screen[2].setAttribute("src","categories2.html#honeymoon");
        screen[2].style.display="inline-block";
    }
}
festivals.onclick=()=>{
    back.style.display="block";
    op4.style.display="inline-block";
    weather.style.display="none";
    sports.style.display="none";
    occasion.style.display="none";
    festivals.style.left="60px";
    festivals.style.top="60px";
    screen[3].style.left="420px";
    screen[3].style.top="-300px";
    items[18].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#kite");
        screen[3].style.display="inline-block";
    }
    items[19].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#lohri");
        screen[3].style.display="inline-block";
    }
    items[20].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#newyear");
        screen[3].style.display="inline-block";
    }
    items[21].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#yatra");
        screen[3].style.display="inline-block";
    }
    items[22].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#christmas");
        screen[3].style.display="inline-block";
    }
    items[23].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#navaratri");
        screen[3].style.display="inline-block";
    }
    items[24].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#ganesh");
        screen[3].style.display="inline-block";
    }
    items[25].onclick=()=>{
        screen[3].setAttribute("src","categories2.html#diwali");
        screen[3].style.display="inline-block";
    }
}