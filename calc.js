   //(function(){
     
     'use strict';
     
     // selecter
     var result = document.getElementById('result');
     
     // number type
     
     var calNum = document.getElementById('cal-num');
     var displayNum = 0;
     var calDigest = 10;
     
     // default possible key

     calNum.addEventListener('click', function(e){
       
       var setId = e.target.id;
       
       for(var i = 0; i < 10; i++){
          if(setId === "cal-" + i){
            if(Number(displayNum).toString().length < calDigest){
              displayNum += i.toString();
              result.textContent = addDisplay(displayNum);
              calStartFlag = false;
            }
          }
        }
        
       // default possible key priod
  
       if(setId === "cal-priod" && displayNum.toString().indexOf(".") === -1){
         if(displayNum === 0){
           displayNum += "0.";
         }
         else{
          displayNum += ".";
         }
        result.textContent = addDisplay(displayNum);
        calStartFlag = false;
      }
       
     });
    
    // calc array
    var calcArray = [];
    
    // cal start flag
    var calStartFlag = true;
    
    // action add
    var calAdd = document.getElementById('cal-add');
    
    calAdd.addEventListener('click', function(){
      
      if(calStartFlag !== true){
        calcArray.push(Number(displayNum));
        displayNum = calcF(calcArray);
        result.textContent = addDisplay(displayNum);
        calcArray = [displayNum];
        displayNum = 0;
        calcArray.push("+");
        calStartFlag = true;
      }
      
    });
    
    // action sub
    var calSub = document.getElementById('cal-sub');
    
    calSub.addEventListener('click', function(){
      
      if(calStartFlag !== true){
        calcArray.push(Number(displayNum));
        displayNum = calcF(calcArray);
        result.textContent = addDisplay(displayNum);
        calcArray = [displayNum];
        displayNum = 0;
        calcArray.push("-");
        calStartFlag = true;
      }
      
    });
    
    // action multi
    var calMulti = document.getElementById('cal-multi');
    
    calMulti.addEventListener('click', function(){
      
      if(calStartFlag !== true){
        calcArray.push(Number(displayNum));
        displayNum = calcF(calcArray);
        result.textContent = addDisplay(displayNum);
        calcArray = [displayNum];
        displayNum = 0;
        calcArray.push("*");
        calStartFlag = true;
      }
      
    });
    
    // action divi
     var calDivi = document.getElementById('cal-divi');
    
    calDivi.addEventListener('click', function(){
      
      if(calStartFlag !== true){
        calcArray.push(Number(displayNum));
        displayNum = calcF(calcArray);
        result.textContent = addDisplay(displayNum);
        calcArray = [displayNum];
        displayNum = 0;
        calcArray.push("/");
        calStartFlag = true;
     }
      
    });
    
    // action equal
    var calEq = document.getElementById('cal-eq');
    
    calEq.addEventListener('click', function(){
      
      if(calStartFlag === false){
        calcArray.push(Number(displayNum));
        displayNum = calcF(calcArray);
        calcArray = [];
        result.textContent = addDisplay(displayNum);
      }
      
    });
    
    // action clear
    
    var calClear = document.getElementById('cal-clear');
    
    calClear.addEventListener('click', function() {
        
        displayNum = 0;
        result.textContent = addDisplay(displayNum);
        calcArray = [];
        calStartFlag = true;
        
    })
    
    // calculation
    
    function calcF(array){
      
      var calcResult = 0;
      calcResult = eval(array.join(""));
      console.log(array.join(""));
      return calcResult;
      
    }
    
    // result add comma
    
    function addDisplay(value){
      
      var result = "";
      var resultCamma = ""
      var resultNumber = Number(value).toString();
      var returnResult = [];
      var regexp = /^[0-9]+/;
      
      var isPeriod = resultNumber.indexOf(".");
      
      if(isPeriod !== -1){
        result = resultNumber.slice(0, isPeriod);
        resultCamma = resultNumber.slice(isPeriod);
      }
      else{
        result = resultNumber;
      }
      
      console.log("カンマ以上 " + result);
      console.log("カンマ以下 " + resultCamma);
      
      if(regexp.test(Number(result)) && Number.isInteger(Number(result)) ){
        var s = 0;
        var cammaResult = Number(result).toString().split("");
        for(var i = (cammaResult.length - 1);i >= 0; i--){
          if(s%3 === 0 && s !== 0){
            returnResult.unshift(","); 
          }
          returnResult.unshift(cammaResult[i]); 
          s++;
        }
        return returnResult.join("") + resultCamma;
      }
      else{
        return result + resultCamma;
      }
        
    }
 
   //})();