class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){printTimeCallback()};
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
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
  return (this.computeTwoDigitNumber(this.getMinutes()) +':'+this.computeTwoDigitNumber(this.getSeconds()));  }
  }

