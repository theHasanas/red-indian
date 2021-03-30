import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { List, ListItem } from "native-base";
import styled from "styled-components";

const contacts = [
  { name: "Ahmed", numbers: ["123", "324"] },
  { name: "Abduljawad", numbers: ["456", "3423", "342"] },
  { name: "Salem", numbers: ["789"] },
];

const HomePage = ({ navigation, route }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contact Profile", { contact })}
          >
            <Text>{contact.name}</Text>
          </TouchableOpacity>
        </ListItem>
      ))}
    </List>
  );
};

export default HomePage;
