// variable to grab each textarea by id
var am8 = $('#8');
var am9 = $('#9');
var am10 = $('#10');
var am11 = $('#11');
var pm12 = $('#12');
var pm1 = $('#13');
var pm2 = $('#14');
var pm3 = $('#15');
var pm4 = $('#16');
var pm5 = $('#17');
var pm6 = $('#18');
var pm7 = $('#19');
var pm8 = $('#20');
// variables to target each button
var btnAm8 = $('#saveBtn8');
var btnAm9 = $('#saveBtn9');
var btnAm10 = $('#saveBtn10');
var btnAm11 = $('#saveBtn11');
var btnPm12 = $('#saveBtn12');
var btnPm1 = $('#saveBtn13');
var btnPm2 = $('#saveBtn14');
var btnPm3 = $('#saveBtn15');
var btnPm4 = $('#saveBtn16');
var btnPm5 = $('#saveBtn17');
var btnPm6 = $('#saveBtn18');
var btnPm7 = $('#saveBtn19');
var btnPm8 = $('#saveBtn20');

var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY'));
};
// targets id currentDay to put a timestamp
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// gets time hour in 24 hour format


// var textareaEl = $('textarea')
function checkTime() {
    var time = Math.floor(moment().format("HH"));
    if (am8) {
        console.log(am8[0].id)
        if (time < am8[0].id) {
            am8.addClass("future");
        } else if (time > am8[0].id) {
            am8.addClass('past');
        } else {
            am8.addClass('present');
        }
    }
    if (am9) {
        if (time < am9[0].id) {
            am9.addClass("future");
        } else if (time > am9[0].id) {
            am9.addClass('past');
        } else {
            am9.addClass('present');
        }
    }
    if (am10) {
        if (time < am10[0].id) {
            am10.addClass("future");
        } else if (time > am10[0].id) {
            am10.addClass('past');
        } else {
            am10.addClass('present');
        }
    }
    if (am11) {
        if (time < am11[0].id) {
            am11.addClass("future");
        } else if (time > am11[0].id) {
            am11.addClass('past');
        } else {
            am11.addClass('present');
        }
    }
    if (pm12) {
        if (time < pm12[0].id) {
            pm12.addClass("future");
        } else if (time > pm12[0].id) {
            pm12.addClass('past');
        } else {
            pm12.addClass('present');
        }
    }
    if (pm1) {
        if (time < pm1[0].id) {
            pm1.addClass("future");
        } else if (time > pm1[0].id) {
            pm1.addClass('past');
        } else {
            pm1.addClass('present');
        }
    }
    if (pm2) {
        if (time < pm2[0].id) {
            pm2.addClass("future");
        } else if (time > pm2[0].id) {
            pm2.addClass('past');
        } else {
            pm2.addClass('present');
        }
    }
    if (pm3) {
        if (time < pm3[0].id) {
            pm3.addClass("future");
        } else if (time > pm3[0].id) {
            pm3.addClass('past');
        } else {
            pm3.addClass('present');
        }
    }
    if (pm4) {
        if (time < pm4[0].id) {
            pm4.addClass("future");
        } else if (time > pm4[0].id) {
            pm4.addClass('past');
        } else {
            pm4.addClass('present');
        }
    }
    if (pm5) {
        if (time < pm5[0].id) {
            pm5.addClass("future");
        } else if (time > pm5[0].id) {
            pm5.addClass('past');
        } else {
            pm5.addClass('present');
        }
    }
    if (pm6) {
        if (time < pm6[0].id) {
            pm6.addClass("future");
        } else if (time > pm6[0].id) {
            pm6.addClass('past');
        } else {
            pm6.addClass('present');
        }
    }
    if (pm7) {
        if (time < pm7[0].id) {
            pm7.addClass("future");
        } else if (time > pm7[0].id) {
            pm7.addClass('past');
        } else {
            pm7.addClass('present');
        }
    }
    if (pm8) {
        if (time < pm8[0].id) {
            pm8.addClass("future");
        } else if (time > pm8[0].id) {
            pm8.addClass('past');
        } else {
            pm8.addClass('present');
        }
    }
}

function saveFunction8() {
    localStorage.setItem("8am", am8.val())
}
function saveFunction9() {
    localStorage.setItem("9am", am9.val())
}
function saveFunction10() {
    localStorage.setItem("10am", am10.val())
}
function saveFunction11() {
    localStorage.setItem("11am", am11.val())
}
function saveFunction12() {
    localStorage.setItem("12pm", pm12.val())
}
function saveFunction13() {
    localStorage.setItem("1pm", pm1.val())
}
function saveFunction14() {
    localStorage.setItem("2pm", pm2.val())
}
function saveFunction15() {
    localStorage.setItem("3pm", pm3.val())
}
function saveFunction16() {
    localStorage.setItem("4pm", pm4.val())
}
function saveFunction17() {
    localStorage.setItem("5pm", pm5.val())
}
function saveFunction18() {
    localStorage.setItem("6pm", pm6.val())
}
function saveFunction19() {
    localStorage.setItem("7pm", pm7.val())
}
function saveFunction20() {
    localStorage.setItem("8pm", pm8.val())
}
// takes info from local storage and places it in appropriate box
function init() {
    am8.val(localStorage.getItem("8am"));
    am9.val(localStorage.getItem("9am"));
    am10.val(localStorage.getItem("10am"));
    am11.val(localStorage.getItem("11am"));
    pm12.val(localStorage.getItem("12pm"));
    pm1.val(localStorage.getItem("1pm"));
    pm2.val(localStorage.getItem("2pm"));
    pm3.val(localStorage.getItem("3pm"));
    pm4.val(localStorage.getItem("4pm"));
    pm5.val(localStorage.getItem("5pm"));
    pm6.val(localStorage.getItem("6pm"));
    pm7.val(localStorage.getItem("7pm"));
    pm8.val(localStorage.getItem("8pm"));
    checkTime();
}
init();
// checkTime();
// function to save textarea input to local storage based on id

btnAm8.on("click", function () {
    saveFunction8();
});
btnAm9.on("click", function () {
    saveFunction9();
});
btnAm10.on("click", function () {
    saveFunction10();
});
btnAm11.on("click", function () {
    saveFunction11();
});
btnPm12.on("click", function () {
    saveFunction12();
});
btnPm1.on("click", function () {
    saveFunction13();
});
btnPm2.on("click", function () {
    saveFunction14();
});
btnPm3.on("click", function () {
    saveFunction15();
});
btnPm4.on("click", function () {
    saveFunction16();
});
btnPm5.on("click", function () {
    saveFunction17();
});
btnPm6.on("click", function () {
    saveFunction18();
});
btnPm7.on("click", function () {
    saveFunction19();
});
btnPm8.on("click", function () {
    saveFunction20();
});