import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {LogLevel, OneSignal} from 'react-native-onesignal';

const App = () => {
  useEffect(() => {
    // Remove this method to stop OneSignal Debugging
    const APP_ID = '09bd8503-2c1d-4568-9dbe-483aef7ded71';
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    // OneSignal Initialization
    OneSignal.initialize(APP_ID);
    OneSignal.Notifications.requestPermission(true);

    // Optional: Prompt for push notification permissions
    // OneSignal.promptForPushNotificationsWithUserResponse(response => {
    //   console.log('Prompt response:', response);
    // });
    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', event => {
      console.log('OneSignal: notification clicked:', event);
    });
  }, []);

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default App;
