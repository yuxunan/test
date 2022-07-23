 
 // 第一題 印出1-9
 // for迴圈

  for(var i=0; i<=9 ; i++ ){
        console.log(i)
    }
  
//  while迴圈
 
  var i = 0 ;
  while (i < 10) {
  console.log(i);  
  i++; 
}



// 第二題 
// 請寫出一個函式叫print 接收一個是數字的參數 並印出1到n


function print(n) {
  for(var i = 1 ; i<= n; i++) {
    console.log(i)
  }
}
print(1)
print(8)


// 第三題
// 寫出一個叫starReturn的function並接受一個參數n，能回傳n個


function starReturn(n){
    var anwser = ''
    for(var i = 0; i <= n; i++){
      anwser += '*'
    }
    console.log(anwser)
  }
  starReturn(6)


// 第四題
// 請寫出一個function  position接收一個字串並回傳字串
// 中第一個大寫字母跟他的index 若沒有則回傳-1


function position(str){
    for(var i=0 ; i<str.length ; i++){
      if (str[i]>="A" && str[i]<= "Z"){
       return str[i]+' '+i
      }
    }
      return -1
   }
   
   console.log(position("Abcd"));
   console.log(position("abcd"));
   

   // 第五題
   // 請寫出一個叫isUpperCase function
   // 並接收一個字串回傳是否是大寫


   function isUpperCase(str){
    var char = str[0]
     if(char>="A" && char <= "Z"){
       return true 
     }else{
       return false
    }
  }
  console.log(isUpperCase("abcd"));
  console.log(isUpperCase("Abcd"));

 

  // 第六題
  // 寫出一個函式 findSmallCount 接收一個陣列
  // 以及數字n 回傳陣列裡面所有小於n的數的總和

  function findSmallCount(arr,n){
    let answer = 0
    for(var i =0 ; i< arr.length; i++){
      if(arr[i] < n){
      answer ++
      }
    }
    return answer
  }
  
  console.log(findSmallCount([1, 2, 3, 5], 7))
  

// 第七題
// 寫出一個函式 findSmallerTotal 接受一個陣列
// 以及數字n 回傳陣列裡面所有小於n 的數的總和

function findSmallerTotal(arr,n) {
    let answer = 0;
    for(var i = 0; i <arr.length ; i++){
      if ( arr[i]<n ){
        answer = answer + arr[i];
      }
    }
    return answer;
  }
  console.log(findSmallerTotal([1, 2, 3, 5, 8, 9], 20))
  console.log(findSmallerTotal([1, 2, 3, 5, 8, 9], 8))
  console.log(findSmallerTotal([1, 2, 3, 5, 8, 9], 3))
  
 // 第八題
  // 寫出一個函式 findALLSmall 接收一陣列跟一個數字n
  // 回傳一個裡面有所有小於n的數的陣列

  function findALLSmall(arr,n) {
    let answer = [];
    for(var i = 0 ; i< arr.length ; i ++){
     if (arr[i]<n){
       answer.push(arr[i]);
     }
    }
    return answer;
  }
  console.log(findALLSmall([1, 2, 3, 7, 22], 33))


  // 第九題
  // 寫出一個函式 sum 
  // 接收一個陣列並回傳陣列中數字的總和

  function sum(arr){
    var answer = 0 ;
    for(var i=0 ; i<arr.length ; i++){
      answer = answer + arr[i]; 
    }
    return answer;
  }
  console.log(sum([1, 2, 3, ]))

  
