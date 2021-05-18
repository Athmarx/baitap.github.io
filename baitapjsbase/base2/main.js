const examArray = [1, 3, 4, 10, 9, 8, 99];
console.log(examArray);
examArray.sort((a, b) => {
  console.log(a, b);
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
  - -1 vs 0 khác nhau ở: 
  - khác 3 giá trị trên hoàn toàn được 
*/


const arr = [1, 2, 3, 'a', 'b', 'c'];

let p = new Promise((resolve)=> {   
  setTimeout(()=> {
    console.log(arr[0]);
    resolve();
  },1000);
});

for(let i = 1; i < arr.length; i++){
  p.then(() => {    
      setTimeout(() => {
      console.log(arr[i]);
    }, 1000 * i);     
  })
};
  
