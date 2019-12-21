# **Calendar Application**

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
* ![Screenshot](/assets/images/Screenshot2.png)
* ![Screenshot](/assets/images/Screenshot3.gif.gif)


# Installation
Visit the web app at: https://magsmagsmags.github.io/danka

# How to use?
1. Load the web app at https://magsmagsmags.github.io/danka
1. The first column of the scheduler diplays the hour (9am-5pm)
1. The second column displays the event information for the corresponding hour
    1. Column will be grey if in the past
    1. Column will be red if in the present
    1. Column will be green if in the future
    1. Click on column to add text descripting your event
1. Click on the "Save" button in the right column to save your event infomation in your browser's local storage
1. Press the grey clear button at the top, center of the page to clear all saved data from your scheduler and local storage

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



