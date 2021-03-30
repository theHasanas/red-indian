import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import profilePic from "../assets/Profile.jpeg";

const SizedImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: stretch;
`;

const HealthyImage = ({ navigation, route }) => {
  console.log(route.params);
  const text = route.params ? route.params.text : "";

  return (
    <TouchableOpacity onPress={() => navigation.push("Sick Image")}>
      <SizedImage source={profilePic} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default HealthyImage;
