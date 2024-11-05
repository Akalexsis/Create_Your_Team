# Create_Your_Team

## DESCRIPTION
This web app allows users to create a new character for the game "Among Us". Users can name their characters, set the character's height, and set the character's color. Users can view all of the characters they've created, edit previously created characters, and delete previously created characters as well.

## FUNCTIONALITY

 - [x] A create form allows users to add new cremates
 - [x] Users can name the crewmate and set the crewmate's attributes by clicking on one of several values
 - [x] The site displays a summary page of all the user's added crewmates
 - [x] A previously created crewmate can be updated from the crewmate list
 - [x] A previously created crewmate can be deleted from the crewmate list
 - [x] Each crewmate has a direct, unique link to an info page about them
 - [x] Pop up included that alerts users that their character has been deleted

## Video Walkthrough
Here's a walkthrough of implemented user stories:
<a href='https://www.dropbox.com/scl/fi/2qdmeueo03oijcv80l9vr/K_Thornton_WEB103_Week7.mp4?rlkey=1ezbkj5er0ocxrt3dkengn6yb&st=c0uc1vzl&dl=0'>Walkthrough Video</a>

## CHALLENGES  
- Passing crewmate data as props
 - I wanted to pass the crewmate data as props to avoid multiple get requests
 - I learned that the useLocation hook from react router could solve this problem
 - With more time, I would like to learn how to prevent too many re-renders of a component
