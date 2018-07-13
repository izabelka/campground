# Camp Features


## How to run the app locally
1. Clone this repository: `git clone https://github.com/izabelka/campground` ([Cloning repository instruction](https://help.github.com/articles/cloning-a-repository/))
2. Inside the cloned repository directory run the command:
`npm install`
(if you don't have npm installed, [get npm](https://www.npmjs.com/get-npm))
3. Run development servers:
`npm start`
4. Your browser should open, if not, open the browser and navigate to: [http://localhost:3000/](http://localhost:3000/)

## About the app
- This App was created using [Create React App](https://github.com/facebookincubator/create-react-app).
- I use [styled-components](https://www.styled-components.com/) for styling.
- When first loaded, the app displays the top level camp features
as a `<ul>` list.
- If a feature is present at the campground it is displayed in green with '✅' icon,
if it is not present, it is displayed in red with '❌' icon.
- If a feature has sub-features, clicking on that feature reveals its sub-features, and so on.
