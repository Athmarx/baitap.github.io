const examArray = [1, 3, 4, 10, 9, 8, 99];
console.log(examArray);
examArray.sort((a, b) => {
  //console.log(a, b);
  if (a > b) {   
    
    return -1;
  }
  if (a < b) {  
      
    return 1;
  }  
    
  return 0;
  
});
// nếu return -1 thì a và b sẽ giữ nguyên vị trí
// nếu return 1 thì a và b sẽ đảo vị trí
// nếu return 0 thì a và b sẽ giữ nguyên vị trí
// => BTVN : -1 và 0 khác nhau ở đâu. và có khác 3 giá trị trên được không ?
// sort có làm thay đổi mảng ban đầu ( vậy là dạng muteable hay immuteable )
/*
  - Đối với mảng number thì  return 0 là không cần thiết. với những array phức tạp ( array chứa object) -1 vs 0 khác nhau ở: 
    + -1 giữ nguyên vị trí của 2 giá trị 
    + 0 giữ nguyên vị trí và liên quan đến tính ổn định của thuật toán sắp xếp. 
      Tức là nếu 2 giá trị bằng nhau thì thứ tự tương đối của chúng sẽ được giữ nguyên.
      vì vậy nếu cái này đứng trước cái kia ở đầu vào thì cũng đứng trước ở đầu ra.
  - khác 3 giá trị trên hoàn toàn được 
*/


const arr = [1, 2, 3, 'a', 'b', 'c'];

let idx = 0;
(function printElementOfArr(params) {
  
  return new Promise(resolve => {
    setTimeout(()=> { console.log(params)},1000);
    idx++;
    resolve(idx);        
  }).then(res => {
    console.log(arr[res]);
    return res++;
  })
})(arr[idx]);
// let p = new Promise(resolve => {
//   setTimeout(() => {
//     console.log(arr [0]);
//     resolve(0);
//   },1000);
// });
// p.then(res => {
  
//   setTimeout(() => {
//     res++;
//     console.log(arr[res]);
    
//     return res;
//   },1000)
// })
//   .then(res2 => {
   
//     setTimeout(() => {
//       res2++;
//       console.log(arr[res2]);
//       return 2;
//     },1000);
//   })
//   .then(res3 => {
    
//     setTimeout(() => {
//       res3++;
//       console.log(arr[res3]);
//       return res3;
//     },1000);
//   })


