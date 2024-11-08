# Web Development Project 7 - *Among Us Members*

Submitted by: **Kayla Thornton**

This web app allows users to create a new character for the game "Among Us". Users can name their characters, set the character's
height, and set the character's color. Users can view all of the characters they've created, edit previously created characters,
and delete previously created characters as well.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form allows users to add new cremates**
- [x] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [x] **The site displays a summary page of all the user's added crewmates**
- [x] **A previously created crewmate can be updated from the crewmate list**
- [x] **A previously created crewmate can be deleted from the crewmate list**
- [x] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

The following **additional** features are implemented:

* [x] Pop up included that alerts users that their character has been deleted

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<a href='https://www.dropbox.com/scl/fi/2qdmeueo03oijcv80l9vr/K_Thornton_WEB103_Week7.mp4?rlkey=1ezbkj5er0ocxrt3dkengn6yb&st=c0uc1vzl&dl=0'>Walkthrough Video</a>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- Passing crewmate data as props
     - I wanted to pass the crewmate data as props to avoid multiple get requests
     - I learned that the useLocation hook from react router could solve this problem
     - With more time, I would like to learn how to prevent too many re-renders of a component

## License

    Copyright [2024] [Kayla Thornton]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.