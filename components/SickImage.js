import React from "react";
import styled from "styled-components";
import profilePic from "../assets/Profile.jpeg";
import { Text, TouchableOpacity } from "react-native";

const SizedImage = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: stretch;
`;

const SickImage = ({ navigation, route }) => {
  const text = route.params ? route.params.text : "";
  return (
    <TouchableOpacity onPress={() => navigation.push("Healthy Image")}>
      <SizedImage source={profilePic} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default SickImage;
