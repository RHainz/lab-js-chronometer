class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){printTimeCallback()};
    },10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime/100%60);
  }

  getCentiseconds() {
    //let reductio=Math.floor(this.currentTime/100);
    return (this.currentTime%100);
    //return (Number((currentTime/100)-Math.floor(this.currentTime/100)).toFixed(2))*100;
  }

  computeTwoDigitNumber(value) {
    let transf= value.toString();
    if (transf.length===1){transf="0"+transf};
    return transf
  }

  stop() {
    clearInterval (this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
  }
}
