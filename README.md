# **Quiz Application**

* A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

* The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:

    1. The time

    1. A field to hold user input

    1. save button

* Clicking on the save button will store the time and user input in `localStorage'

* https://github.com/magsmagsmags/danka.git
* https://magsmagsmags.github.io/danka/


# Motivation
AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively 


# Requirements

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* Your application should also be responsive, ensuring that it adapts to multiple screen sizes.



# Code style
* HTML
* CSS
* js-standard-style

# Screenshots
* ![Screenshot](/assets/images/Screenshot1.png)
* ![Screenshot](/assets/images/screenshot2.png)
* ![Screenshot](/assets/images/screenshot3.png)
* ![Screenshot](/assets/images/screenshot4.png)

# Installation
Visit the web app at: https://magsmagsmags.github.io/lily/

# How to use?
1. Load the web app at https://magsmagsmags.github.io/lily/
1. x
1. x
    1. x
    1. x
1. x
    1. x
1. x

# Contribute
Please reach out to me via Slack (Mags Kiefer) or at sheakiefer@gmail.com for code suggestions, critiques, feedback, or offers to collaborate. 

# Credits

* Brittany Taylor
* Israel Medina
* Eric Scott

--------------------------------


## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

* Each timeblock contains an input field and save button.

* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

* The current day is displayed at the top of the calendar.

* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

* GIVEN that an employee adds events to a specific hour in a calendar

* WHEN the employee clicks the save button

* THEN events are saved in the timeblock for that hour






--------------------
# Unit 05 Third-Party APIs Homework: Day Planner

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:

* The time

* A field to hold user input

* A save button

Clicking on the save button will store the time and user input in `localStorage`.

Near the top of the calendar, the application should display the current day. Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

![day planner demo](./Assets/05-Third-Party-APIs-homework-demo.gif)

