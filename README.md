This version of the Jitsy Funky prototype will run against an openfire server.  To configure location of openfire update:

UI Functionality:

Support video and audio conferences
Support conference chat
Ability to specify the name of the room to connect to and your display name in the conference
Hook into iPhone’s telephony API ( CallKit )
The building blocks that i used for this prototype are:

lib-jitsi-meet — a low level javascript client library for managing Jitsi Meet Video conferences

react-native-webrtc — provides web browsers and mobile applications with real-time communication (RTC) via simple application programming interfaces (APIs)

react-native-callkit — utilises the new iOS 10 framework CallKit for VOIP apps to interact with the iPhone UI

mobx-state-tree — a library that helps you organize your application states in a very structured manner. It allows you to create a component model, but for your data

react-native-gifted-chat — chat UI for React Native

INSTALLATION INSTRUCTIONS:

1. Download the code 
2. cd into the root directory and run npm install
3. cd into the ios directory and run pod install
4. open 2 terminals and make sure you are in the root directory:
5. run npm start — — reset-cache
6. run react-native run-ios — device ( TO RUN ON THE DEVICE YOU WILL NEED TO SIGN THE PROJECT IN XCODE )

The prototype is configured to connect to an openfire server running on localhost.  To connect to a different machine you have to do the following:

1. Update ./app/servers/jitsi-api/jitsi-api-config.ts with the appropriate base url to get the server config file.  The url is http://localhost:7070/ofmeet/config.js without ssl and https://localhost:7443/ofmeet/config.js with ssl
2. Update ./jitsi-meet/config.js if you need to override any of the values in the config.  If nothing needs to be overriden make sure the config is empty or hasOverrides in ./app/models/root-store/setup-root-store.ts is set to false
3. also update ssl in ./app/models/root-store/setup-root-store.ts.  Set to true if ssl for the server is enabled, otherwise leave false

More details here:

https://medium.com/@dgeorgiev06/chat-and-video-conference-app-with-react-native-ignite-lib-jitsi-meet-react-native-callkit-21089944ba54