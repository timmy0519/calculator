let displayDiv = document.querySelector("#displayText");
let smallNumDiv = document.querySelector("#displaySmallText");
let curNum = "";
let existDot = false;
let numbers = document.querySelectorAll(".l_button.number");
let ops = document.querySelectorAll(".op");
let clearButton = document.querySelector("#C");
let dotButton = document.querySelector("#dot")
let currentOP = [], nums = [];
let evalButton = document.querySelector("#eval")
let numberDiv = document.querySelector("#numbers");
let opDiv = document.querySelector("#ops");
numbers.forEach(number => {
    number.addEventListener("click",function(e){
        curNum+= e.target.id
        displayDiv.textContent = curNum;
        
    });
});
evalButton.addEventListener("click",evalNum);
ops.forEach(op => {
    op.addEventListener("click",(e)=>{
        if(currentOP.length==0)
            currentOP.push(e.target.id);
        if(curNum.length){
            console.log(nums.push(Number(curNum)));
        }
        displayDiv.textContent = "";
        curNum = "";
        smallNumDiv.textContent = nums[0];
        showSmallNum();
    })
});

opDiv.style.setProperty("height",getComputedStyle(numberDiv).height,"important")

clearButton.addEventListener("click",clearDisplay);
dotButton.addEventListener("click",()=>{
    if(!existDot){
        curNum+="."
        displayDiv.textContent=curNum;
        existDot = true;
    }
});

function clearDisplay(){
    curNum = "";
    nums = [];
    currentOP = []
    displayDiv.textContent = "";
    console.log("clear");
    existDot = false;
}

function evalNum(){
    let n1 = nums[0], n2 = Number(curNum);
    console.log(nums.length);
    if (currentOP[0] === 'add'){
        let res = n1+n2;
        displayDiv.textContent = res;
        nums = [res];
        curNum = res;
    }else if (currentOP[0] === 'minus'){
        let res = n1-n2;
        displayDiv.textContent = res;
        nums = [res];
        curNum = res;
    }else if (currentOP[0] === 'mult'){
        let res = n1*n2;
        displayDiv.textContent = res;
        nums = [res];
        curNum = res;
    }else if (currentOP[0] === 'divide'){
        let res = n1/n2;
        displayDiv.textContent = res;
        nums = [res];
        curNum = res;
    }
    currentOP = []
    smallNumDiv.textContent = curNum
    hideSmallNum()
}
function hideSmallNum(){
    smallNumDiv.style.visibility = "hidden";
}
function showSmallNum(){
    smallNumDiv.style.visibility = "visible";
}