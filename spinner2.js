console.clear();
let t = 100
let spinner = '|/-\\|'

for (let i = 0; i < spinner.length; i++) {
setTimeout(() => {
  process.stdout.write(`\r${spinner[i]}   `);
}, t);
t+= 100
}
