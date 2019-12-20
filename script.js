var currentDayEl = $("#currentDay");
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);

var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");


currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // var currHour = moment().hour();
    var currHour = 12;

    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}
setInterval(update, 1000);

var textInput = $(".time-block");
var saveBtn = $(".saveBtn");
// var eventNameSpan = document.querySelector(".text-area");


saveBtn.on("click", function (event) {
    event.preventDefault();

    var btnData = $(this).attr("data-time");
    //console log click on THIS specific button in this class
    console.log(btnData);
    //descriptionTarget locates the specific description element that user filled in text with.
    var descriptionTarget = $(".description");
    console.log(descriptionTarget);
    //we log to ensure we're grabbing the user input.
    console.log(descriptionTarget.val());

    // // create user object from submission
    // var event = {
    //     textInput: textInput.value.trim(),
    // };

    // console.log(event);

    // // validate the fields
    // if (textInput === "") {
    //     displayMessage("error", "Event description cannot be blank");
    // } else {
    //     displayMessage("success", "Event Saved");

    // set new submission
    // localStorage.setItem("event", JSON.stringify(event));

    //this is supposed to set the text area text to that specific textArea and store it.
    //We pick the "id" attribute from the element, descriptionTarget. This id is the key, and the key value is descriptionTarget.val().
    localStorage.setItem(descriptionTarget.attr("id"), JSON.stringify(descriptionTarget.val()));
});

$("#desc9").text(localStorage.getItem("desc9"));
$("#desc10").text(localStorage.getItem("desc10"));
$("#des11").text(localStorage.getItem("desc11"));
$("#desc12").text(localStorage.getItem("desc12"));
$("#desc13").text(localStorage.getItem("desc13"));
$("#desc14").text(localStorage.getItem("desc14"));
$("#desc15").text(localStorage.getItem("desc15"));
$("#desc16").text(localStorage.getItem("desc16"));
$("#desc17").text(localStorage.getItem("desc17"));

    // // get most recent submission
    // var savedEvent = JSON.parse(localStorage.getItem("event"));
    // textInputEl.textContent = savedEvent.textInput;
// }
// });

