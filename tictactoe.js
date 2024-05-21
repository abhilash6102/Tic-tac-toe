let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let newbtn1=document.querySelector("#new-btn-1");
let message=document.querySelector(".message");
let msg=document.querySelector("#msg");
let inbox=document.getElementById("inbox");
let drawmatch=document.querySelector(".draw");
let drawmsg=document.querySelector("#drawmsg");

let turn_x=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_x){
            box.innerText="X";
            turn_x=false;
            document.getElementById("para_x").style.display="none";
            document.getElementById("para_o").style.display="block"
        }
        else{
            box.innerText="O";
            turn_x=true;
            document.getElementById("para_x").style.display="block";
            document.getElementById("para_o").style.display="none"
        }
        box.disabled=true;
        
        checkwinner();
    });
    
})

const checkwinner=()=>{
   let count=0;
     for(patterns of winpatterns){
        let posval1=boxes[patterns[0]].innerText;
        let posval2=boxes[patterns[1]].innerText;
        let posval3=boxes[patterns[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                async function call(){
                Times(posval1);
                value(patterns[0],patterns[2]);
                lines(patterns[0],patterns[2]);
                await showwinner(posval1);
                await disableboxes();
                }
                call();
            }
            else{
                count++;
            }
        }
     }
     
     draw(count);
}
let cnt_o=0;
    let cnt_x=0;
const Times=(i)=>{
   
    if(i==='X'){
        cnt_x++;
    }
    else if(i==='O'){
        cnt_o++;
    }
    console.log("o",cnt_o);
    console.log("x",cnt_x);
}
const showwinner=(winner)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            msg.innerText=`Congratulations, Winner is ${winner}`;
            message.classList.remove("hide");
            inbox.style.display = "none";
            resolve();
        }, 2000);
    });
   
}
 
const disableboxes=()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            for(let i of boxes){
                i.disabled=true;
            }
            resolve();
        }, 500);
    });
   
}

const enableboxes=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
        
    }
    
}

let underline=document.querySelector(".lines");
const resetgame=()=>{
    turn_x=true;
    document.getElementById("para_x").style.display="block";
    document.getElementById("para_o").style.display="none";
    enableboxes();
}
reset.addEventListener("click",()=>{
    resetgame();
   
});

newbtn.addEventListener("click",()=>{
    inbox.style.display = "block";
    message.classList.add("hide");
    
    resetgame();
});
newbtn1.addEventListener("click",()=>{
    inbox.style.display = "block";
    drawmatch.classList.add("blind");
    resetgame();
});

function draw(count){
    setTimeout(()=>{
        if(count===8){
            drawmsg.innerText="Draw Match";
            drawmatch.classList.remove("blind");
            inbox.style.display = "none";
        }
    },1000);
   
}

// for smooth lines 
const lines=(i,j)=>{
   if(i===0 &&j===2){
    document.querySelector('.line1').classList.add('active');
   }
   else if(i===3 && j===5){
    document.querySelector('.line2').classList.add('active');
   }
   else if(i===6 && j===8){
    document.querySelector('.line3').classList.add('active');
   }
   else if(i===0 && j===6){
    document.querySelector('.line4').classList.add('active');
   }
   else if(i===1 && j===7){
    document.querySelector('.line5').classList.add('active');
    
   }
   else if(i===2 && j===8){
    document.querySelector('.line6').classList.add('active');
    
   }
   else if(i===0 && j===8){
    document.querySelector('.line7').classList.add('diagonal');
    document.querySelector('.line7').classList.add('active');
    
   }
   else if(i===2 && j===6){
    document.querySelector('.line8').classList.add('active');
    document.querySelector('.line8').classList.add('diagonal');
    
   }
}

const value=(i,j)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            if(i===0 &&j===2){
                document.querySelector('.line1').classList.remove('active');
                
               }
               else if(i===3 && j===5){
                document.querySelector('.line2').classList.remove('active');
               }
               else if(i===6 && j===8){
                document.querySelector('.line3').classList.remove('active');
               }
               else if(i===0 && j===6){
                document.querySelector('.line4').classList.remove('active');
               }
               else if(i===1 && j===7){
                document.querySelector('.line5').classList.remove('active');
                
               }
               else if(i===2 && j===8){
                document.querySelector('.line6').classList.remove('active');
                
               }
               else if(i===0 && j===8){
                document.querySelector('.line7').classList.remove('diagonal');
                document.querySelector('.line7').classList.remove('active');
                
               }
               else if(i===2 && j===6){
                document.querySelector('.line8').classList.remove('active');
                document.querySelector('.line8').classList.remove('diagonal');
                
               }
   
            resolve();
        }, 2000);
    });
            
    }

   