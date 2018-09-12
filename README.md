---

React Native Ui Design Airbnb
Hello there .In this article i'm going to show how to to build a react native app like airbnb . this is just simple start of ui in react-native and web a some parts of airbnb ui . 
First of all you need to initialize a react native app you could either use react-native-cli and create-react-native-app to setup your project.
i'm going to use create-react-native-app on this article 


---

so just enter: 
create-react-native-app AirbnbCloneUi
after every thing set up you can run your project to check that every is ok. 
now we are going to install or first library . it's react-navigation so open up terminal and i'm going to install a specific version of react-navigation to make sure that doesn't break in future. 
npm install react-navigation@2.0.4 -S


After that we need to create a screen folder to for the perpose of using build screens componen and use them in react-navigation so just create screen folder in the root of your project and make for pages with names "Explorejs" "Saved.js" "Inbox.js" "Trips.js" "Profile.js" for now in the screens you can use the boilerplate below into the files .





ok after creating screen it's the time to set up react-navigation and routes so open up your App.js file in root of your project then you should import it and config it . your App.js going to look like below 



as you can see we import screen and add routes . now it's the time to add icons to our tabbar but for icons your install react-native-vector-icons so just open up your terminal again and enter this command 
npm install -S react-native-vector-icons


after that import it in app.js and use it like 







ok so it's the time to change explore view this change it to below



if you look to explore.js now there is to component imported that we should make them : Home and Category for cards in the page so you can make them like below 
Home : 
https://gist.github.com/aryasadeghy/3bddf3bc7ea0e04404258de0a3998f89


Catgeory: 
https://gist.github.com/aryasadeghy/f2931ba70c3e5d8719f4acb467c34209