import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Image source={require('../assets/images/404-animation.png')} style={styles.splashImage} />
        <MaterialIcons name="error-outline" size={80} color="#ff6b6b" />
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.message}>
          The page you are looking for doesn't seem to exist.
        </Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to Home Screen</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  splashImage: {
    width: 300,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  message: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  link: {
    marginTop: 30,
    backgroundColor: "#ff6b6b",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
