# An app to track your movement

This app has been developed as an exercise to to improve my React Native knowledge.

Make sure you also clone a repository for the app at 'position-tracker-app-exercise'.

Use Expo to run this app.

(THIS CONNECTS TO THE MONGO INSTANCE)
cd position-tracker-server
npm run dev 

(THIS EXPOSES A WEB SERVER TO YOUR LOCAL MACHINE)
cd position-tracker-server
ngrok http 3000
replace 'BaseURL' with ngrok forwarding http in './src/api/tracker'

(THIS INSTALLS DEPENDENCIES AND RUNS THE APP)
cd position-tracker-app
yarn install 
yarn add react-navigation
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add react-navigation-tabs
yarn add axios
yarn add react-navigation-stack @react-native-community/masked-view
yarn add react-native-elements
yarn add react-native-maps
yarn add @react-native-async-storage/async-storage
