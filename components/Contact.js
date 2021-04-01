import { Button } from "native-base";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import profilePic from "../assets/Profile.jpeg";
import ahmedPic from "../assets/ahmed.png";

const SizedImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: stretch;
`;

const Contact = ({ navigation, route }) => {
  console.log(route.params);
  const contact = route.params ? route.params.contact : "";

  return (
    <TouchableOpacity onPress={() => navigation.push("Sick Image")}>
      <SizedImage source={contact.name === "Ahmed" ? ahmedPic : profilePic} />
      <Text>{contact.name}</Text>
      <Button
        onPress={() =>
          navigation.push("Call Page", { numbers: contact.numbers })
        }
      >
        <Text>Call</Text>
      </Button>
    </TouchableOpacity>
  );
};

export default Contact;
