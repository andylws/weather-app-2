import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#485563", "#29323c"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#D7DDE8", "#757F9A"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#859398", "#283048"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E2E2E2", "#C9D6FF"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#859398", "#283048"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#E0EAFC", "#CFDEF3"],
  },
  Smoke: {
    iconName: "weather-hazy",
    gradient: ["#eef2f3", "#8e9eab"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#D7DDE8", "#757F9A"],
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#DECBA4", "#3E5151"],
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#BBD2C5", "#536976"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#414345", "#232526"],
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
      <View style={styles.halfContainer}></View>
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
    justifyContent: "center",
    alignItems: "center",
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
});
