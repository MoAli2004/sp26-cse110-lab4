function printTime() {
  const d = new Date();
  console.log(d.toLocaleTimeString());
}

setInterval(printTime, 1000);
