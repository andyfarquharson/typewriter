const sentence = "hello there from lighthouse labs'\n'";
let duration = 1000;

for (const char of sentence) {
  setTimeout(() => { 
    process.stdout.write(char);
  }, duration);
  process.stdout.write("\n");
  duration += 50;
}