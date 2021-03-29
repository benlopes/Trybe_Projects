let num1 = 15;

let lines1 = Math.ceil(num1/2);

for(let index = 0; index < lines1; index += 1) {
  
  let spaces1 = ' '.repeat(lines1 - (index + 1));
  
  console.log((spaces1).concat('*'.repeat((2 * index) + 1)));
}
