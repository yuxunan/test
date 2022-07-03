


let age = prompt("請輸入你的年齡:");

age = Number(age);
console.log(age, typeof age);


if(isNaN(age)){
    alert("請輸入阿拉伯數字");
}else{
    if (age < 0){
        alert("請輸入正確年齡(年齡必須大於等於0)");
    }else if (age <= 12){
        alert("你的兒童票一張100元");
    } else if((age> 12) && (age<=65)){
        alert("你的成人票一張250元");
    } else if((age> 65) && (age<150)){
        alert("你的敬老票一張150元");
    } else {
        alert("請輸入正確年齡(年齡必須小於等於150)");
    }
}


