let day = []
let month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
let year = []
let selectedDay = ""
let selectedMonth = ""
let selectedYear = ""
let selectDay = document.getElementById("selectDay")
let selectMonth = document.getElementById("selectMonth")
let selectYear = document.getElementById("selectYear")
let birth_date = ""
window.onload = calendarInit
let isLeap = year => new Date(year, 1, 29).getDate() === 29;
// console.log("คำนวณปีอธิกสุรทิน",isLeap(2019))
function calendarInit(){
    currentYear = new Date().getFullYear()+543
    currentMonth = new Date().getMonth()
    currentDay = new Date().getDate()
    console.log(currentMonth)
    console.log(currentDay)
    for(let i=0 ; i<31 ; i++) {
        day.push(i+1)
        let el = document.createElement("option")
        el.textContent = i+1;
        el.value = i+1;
        selectDay.appendChild(el);
    }
    for(let i=currentYear ; i>currentYear-100 ; i--) {
        year.push(i)
        let el = document.createElement("option")
        el.textContent = i;
        el.value = i;
        selectYear.appendChild(el);
    }
    for(let i=0 ; i<month.length ; i++) {
        let el = document.createElement("option")
        el.textContent = month[i];
        el.value = month[i];
        selectMonth.appendChild(el);
    }
}
function onClickDay(){
    selectMonth.value = ""
    selectYear.value = ""
}

function onClickMonth(){
    let monthFlag

    if(selectDay.value == "") {
        selectDay.value = ""
        selectMonth.value = ""
        selectYear.value = ""
    } else {
        if(selectDay.value == 31) {
            monthFlag = checkMonth(selectMonth.value, 1)
        } else if(selectDay.value == 30) {
            monthFlag = checkMonth(selectMonth.value, 2)
        } else {
            monthFlag = true
        }

        if(monthFlag == false) {
            selectDay.value = ""
            selectMonth.value = ""
        }
       console.log("kkkk",selectMonth.value) 
    }

}
function onClickYear(){
    if(selectDay.value == "" || selectMonth.value == "") {
        selectDay.value = ""
        selectMonth.value = ""
        selectYear.value = ""
    } else {
        let isLeapFlag = isLeap(selectYear.value-543)
        let monthIndex = month.findIndex(ele => ele == selectMonth.value)
        let inputDate = new Date(selectYear.value-543, monthIndex, selectDay.value)
        let today = new Date()
        if (inputDate > today) {
            selectDay.value = ""
            selectMonth.value = ""
            selectYear.value = ""
        }

        if(isLeapFlag == false) {
            if(selectDay.value == 29 && selectMonth.value == month[1]) {
                selectDay.value = ""
                selectMonth.value = ""
                selectYear.value = ""
            }
        } 
           // wait api
           birth_date = selectDay.value+""+selectMonth.value+""+selectYear.value
    }
}

function checkMonth(inputMonth, mode) {
    let found
    flag = false;
    month31 = ['มกราคม', 'มีนาคม', 'พฤษภาคม', 'กรกฎาคม', 'สิงหาคม', 'ตุลาคม', 'ธันวาคม']
    month30 = ['มกราคม', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    feb = ['กุมภาพันธ์']
    if(mode == 1) {
        found = month31.find(ele => ele == inputMonth)
    } else if(mode == 2) { 
        found = month30.find(ele => ele == inputMonth)
    } else { 
        found = true
    }
    if (found) flag = true;
    return flag
}
