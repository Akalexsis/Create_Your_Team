# Create_Your_Team

Web Development Project 7 - Among Us Members
Submitted by: Kayla Thornton

This web app allows users to create a new character for the game "Among Us". Users can name their characters, set the character's height, and set the character's color. Users can view all of the characters they've created, edit previously created characters, and delete previously created characters as well.

Time spent: 7 hours spent in total

Required Features
The following required functionality is completed:

 A create form allows users to add new cremates
 Users can name the crewmate and set the crewmate's attributes by clicking on one of several values
 The site displays a summary page of all the user's added crewmates
 A previously created crewmate can be updated from the crewmate list
 A previously created crewmate can be deleted from the crewmate list
 Each crewmate has a direct, unique link to an info page about them
The following optional features are implemented:

 A crewmate can be given a category upon creation which restricts their attributes
 The site displays summary statistics about a user's crew on their crew page
 The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list
The following additional features are implemented:

 Pop up included that alerts users that their character has been deleted
Video Walkthrough
Here's a walkthrough of implemented user stories:

Walkthrough Video

GIF created with ...

Notes
Describe any challenges encountered while building the app.

Passing crewmate data as props
I wanted to pass the crewmate data as props to avoid multiple get requests
I learned that the useLocation hook from react router could solve this problem
With more time, I would like to learn how to prevent too many re-renders of a component
