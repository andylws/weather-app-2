import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#485563", "#29323c"],
    title: "Thunderstorm",
    subtitle: "Electric Shock!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#D7DDE8", "#757F9A"],
    title: "Drizzle",
    subtitle: "Nice to get soaked in the rain :)",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#859398", "#283048"],
    title: "Rainy",
    subtitle: "Don't forget your umbrella.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E2E2E2", "#C9D6FF"],
    title: "Snowy",
    subtitle: "Winter wonderland",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#859398", "#283048"],
    title: "Foggy",
    subtitle: "Watch out!",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Sunny",
    subtitle: "Happy day :)",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Cloudy",
    subtitle: "Gloomy Blue.",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#E0EAFC", "#CFDEF3"],
    title: "Misty",
    subtitle: "Everybody moist Skin! LOL",
  },
  Smoke: {
    iconName: "weather-hazy",
    gradient: ["#eef2f3", "#8e9eab"],
    title: "Smoky",
    subtitle: "No smoking.",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#D7DDE8", "#757F9A"],
    title: "Hazy",
    subtitle: "Can you see me?",
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
    title: "Dusty",
    subtitle: "MASK!",
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#DECBA4", "#3E5151"],
    title: "Sand",
    subtitle: "MASK! MASK!",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Sunny",
    subtitle: "MASK! MASK! MASK!",
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#BBD2C5", "#536976"],
    title: "Squall",
    subtitle: "Hold on your hat!",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#414345", "#232526"],
    title: "Tornado",
    subtitle: "Keep in home safely.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="white-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
