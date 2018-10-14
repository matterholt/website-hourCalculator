class DailyHours {
  constructor(_punchIn, _punchOut, _lunch, _pto) {
    this.punchIn = _punchIn;
    this.punchOut = _punchOut;
    this.lunch = _lunch;
    this.pto = _pto;
  }
  //methods
  whachaDoin() {
    console.log(`
     Punched IN ->  ${this.punchIn}
     punched out -> ${this.punchOut} 
     Lunch TIme -> ${this.lunch} hrs
     Paid Time OFF -> ${this.pto} hrs
     `);
  }
  get performCal() {
    let punchIn = flexTime(this.punchIn);
    let punchOut = flexTime(this.punchOut);
    function flexTime(time) {
      let hrMin = time.split(/[.:]/);
      console.log(hrMin);
      //obtain hour values and return number
      let hrs = parseInt(hrMin[0], 10); //???? what does "10" mean
      console.log(hrs);
      //index minute, apply flex time return number
      let flexing = Math.round(parseInt(hrMin[1], 10) / 6) / 10;
      console.log(flexing);
      //combine minute with the hours
      let flextTime = hrs + flexing;
      console.log(flextTime);
      return flextTime;
    }
    let dailyHours =
      punchOut - punchIn - parseFloat(this.lunch) + parseFloat(this.pto);
    return `Daily Total: 
    ${dailyHours} hours`;
  }

  //getter
  //
  //setters
  //
  //how many days that you worked, punhced in
}
//Practice with inheritance
class weekends extends DailyHours {
  constructor(_punchIn, _punchOut) {
    super(_punchIn, _punchOut);
  }
}

function calculateTime() {
  let punchInTime = document.getElementById("monIn").value;
  console.log(punchInTime);
  let punchOutTime = document.getElementById("monOut").value;
  console.log(punchOutTime);
  const monday = new DailyHours(punchInTime, punchOutTime, "0.5", "0");
  console.log(monday);
  //const tuesday = new DailyHours("7:32", "18:47", "0.5", "0");
  const monTotal = document.getElementById("monTotal");
  monTotal.innerHTML = monday.performCal;
}
const monday = new DailyHours("08:00", "16:30", "0.5", "0");
const tuesday = new DailyHours("07:32", "18:47", "0.5", "0");
