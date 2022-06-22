//1.FIND THE HR MINN AND SECCONDS.
// ANS
// function time(second){
//     let hr = Math.floor(second/3600);
//     let hr1 = hr*3600;
//     let min = Math.floor (hr1/60);
//     let min1 = Math.floor (second -  (min*60));
//     let sec = (hr1+min1) - second;
//     let comp = `In ${second} seconds ${hr} hours , ${min} minutes and ${sec} seconds are possible1`;
//     return comp;
// }
// console.log(time(5000));

//2. FIND THE TEMPERATURE.
// ANSWER.
// function temperature(temp){
//     let tem = (temp-32)*5/9;
//     return tem;
    
// }
// console.log(temperature(122));

//3.FIND THE SOME OF SQUARE DIGITS ..
// ANSWER.
// function findSumValueOfDigits(num){
//     let count = 1;
//     while(count<100 && num != 1){
//         let sum = 0;
//         while(num !=0){
//             let x = (num%10);
//             sum = sum+(x*x);
//             num = Math.floor(num/10);
//         }
//         count++;
//         num = sum;
//     }
//     if(num==1){
//         return ("CodeSpecial");
//     }else{
//         return ("SomethingUnusual");
//     }
// }
// console.log(findSumValueOfDigits(77));
