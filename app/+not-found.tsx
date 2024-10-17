import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View, Animated, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-linear-gradient'
import { useRef, useEffect } from 'react';

export default function NotFoundScreen() {
  const buttonScale = useRef(new Animated.Value(1)).current;

  // Animation for button on press
  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <LottieView
          source={require('../assets/images/404-animation.png')} // Replace with your Lottie file path
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.message}>
          The page you are looking for doesn't seem to exist.
        </Text>
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Link href="/" style={styles.link}>
              <Text style={styles.linkText}>Go to Home Screen</Text>
            </Link>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
  message: {
    fontSize: 18,
    color: "#f0f0f0",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  link: {
    backgroundColor: "#ff6b6b",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
