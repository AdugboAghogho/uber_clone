// import { StatusBar, Text,  } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';


// export default function HomeScreen() {
//   return (
//     <SafeAreaView className="flex-1 items-center justify-center bg-black">
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

import { StatusBar } from 'expo-status-bar'; // If using Expo
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

