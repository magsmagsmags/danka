
// DOM elements
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");

var desc1El = $("#desc1");
var desc2El = $("#desc2");
var desc3El = $("#desc3");
var desc4El = $("#desc4");
var desc5El = $("#desc5");
var desc6El = $("#desc6");
var desc7El = $("#desc7");
var desc8El = $("#desc8");
var desc9El = $("#desc9");

// Setting current day with moment.js
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var currHour = moment().hour();
    // var currHour = 12; - to test if the color changes are working

    // grabbing elements with data-time attribute to change class based on hour comparison to current hour
    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}
// setting time interval to update every second
setInterval(update, 1000);

// function to retrieve stored user data -- NEED A WAY TO ELIMINATE THE REPETITION (I know DRY!)
renderUserInput();

function renderUserInput() {
    var userDesc1 = localStorage.getItem("desc1");
    $("#desc1").val(JSON.parse(userDesc1));

    var userDesc2 = localStorage.getItem("desc2");
    $("#desc2").val(JSON.parse(userDesc2));

    var userDesc3 = localStorage.getItem("desc3");
    $("#desc3").val(JSON.parse(userDesc3));

    var userDesc4 = localStorage.getItem("desc4");
    $("#desc4").val(JSON.parse(userDesc4));

    var userDesc5 = localStorage.getItem("desc5");
    $("#desc5").val(JSON.parse(userDesc5));

    var userDesc6 = localStorage.getItem("desc6");
    $("#desc6").val(JSON.parse(userDesc6));

    var userDesc7 = localStorage.getItem("desc7");
    $("#desc7").val(JSON.parse(userDesc7));

    var userDesc8 = localStorage.getItem("desc8");
    $("#desc8").val(JSON.parse(userDesc8));

    var userDesc9 = localStorage.getItem("desc9");
    $("#desc9").val(JSON.parse(userDesc9));

    if (userDesc1 && userDesc2 && userDesc3 && userDesc4 && userDesc5 && userDesc6 && userDesc7 && userDesc8 && userDesc9 === null) {
        return;
    }

    desc1El.textContent = userDesc1;
    desc2El.textContent = userDesc2;
    desc3El.textContent = userDesc3;
    desc4El.textContent = userDesc4;
    desc5El.textContent = userDesc5;
    desc6El.textContent = userDesc6;
    desc7El.textContent = userDesc7;
    desc8El.textContent = userDesc8;
    desc9El.textContent = userDesc9;
}

// event listener to store user input upon click of Save button -- NEED A WAY TO ELIMINATE THIS REPETITION
saveBtnEl.on("click", function (event) {
    event.preventDefault();
    var input1 = $("#desc1").val();
    localStorage.setItem("desc1", JSON.stringify(input1));

    var input2 = $("#desc2").val();
    localStorage.setItem("desc2", JSON.stringify(input2));

    var input3 = $("#desc3").val();
    localStorage.setItem("desc3", JSON.stringify(input3));

    var input4 = $("#desc4").val();
    localStorage.setItem("desc4", JSON.stringify(input4));

    var input5 = $("#desc5").val();
    localStorage.setItem("desc5", JSON.stringify(input5));

    var input6 = $("#desc6").val();
    localStorage.setItem("desc6", JSON.stringify(input6));

    var input7 = $("#desc7").val();
    localStorage.setItem("desc7", JSON.stringify(input7));

    var input8 = $("#desc8").val();
    localStorage.setItem("desc8", JSON.stringify(input8));

    var input9 = $("#desc9").val();
    localStorage.setItem("desc9", JSON.stringify(input9));

    renderUserInput();
});

// clear button - clears all local storage
$("#clearBtn").on("click", function () {
    localStorage.clear();
    $(".description").text("");
});

// var currentDayEl = $("#currentDay");
// currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// var update = function () {
//     currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// }
// setInterval(update, 1000);

// var currentDayEl = $("#currentDay");
// var saveBtnEl = $(".saveBtn");
// var textBoxEl = $(".time-block");


// currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// var update = function () {
//     currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//     // var currHour = moment().hour();
//     var currHour = 12;

//     textBoxEl.each(function (index, element) {
//         element = $(element);
//         if (currHour > element.attr("data-time")) {
//             element.addClass("past").removeClass("future");
//         } else if (currHour == element.attr("data-time")) {
//             element.addClass("present").removeClass("future");
//         }
//     });
// }
// setInterval(update, 1000);

// var textInput = $(".time-block");
// var saveBtn = $(".saveBtn");
// // var eventNameSpan = document.querySelector(".text-area");


// saveBtn.on("click", function (event) {
//     event.preventDefault();

//     var btnData = $(this).attr("data-time");
//     //console log click on THIS specific button in this class
//     console.log(btnData);
//     //descriptionTarget locates the specific description element that user filled in text with.
//     var descriptionTarget = $(".description");
//     console.log(descriptionTarget);
//     //we log to ensure we're grabbing the user input.
//     console.log(descriptionTarget.val());

//     // // create user object from submission
//     // var event = {
//     //     textInput: textInput.value.trim(),
//     // };

//     // console.log(event);

//     // // validate the fields
//     // if (textInput === "") {
//     //     displayMessage("error", "Event description cannot be blank");
//     // } else {
//     //     displayMessage("success", "Event Saved");

//     // set new submission
//     // localStorage.setItem("event", JSON.stringify(event));

//     //this is supposed to set the text area text to that specific textArea and store it.
//     //We pick the "id" attribute from the element, descriptionTarget. This id is the key, and the key value is descriptionTarget.val().
//     localStorage.setItem(descriptionTarget.attr("id"), JSON.stringify(descriptionTarget.val()));
// });


//     // // get most recent submission
//     // var savedEvent = JSON.parse(localStorage.getItem("event"));
//     // textInputEl.textContent = savedEvent.textInput;


//     // try 2, one for ach row
//     // $("#desc9").text(localStorage.getItem("desc9"));
//     // $("#desc10").text(localStorage.getItem("desc10"));
//     // $("#des11").text(localStorage.getItem("desc11"));
//     // $("#desc12").text(localStorage.getItem("desc12"));
//     // $("#desc13").text(localStorage.getItem("desc13"));
//     // $("#desc14").text(localStorage.getItem("desc14"));
//     // $("#desc15").text(localStorage.getItem("desc15"));
//     // $("#desc16").text(localStorage.getItem("desc16"));
//     // $("#desc17").text(localStorage.ge                               tItem("desc17"));


// // }
// // });

