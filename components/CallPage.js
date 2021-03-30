import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { List, ListItem } from "native-base";

const CallPage = ({ navigation, route }) => {
  const numbers = route.params ? route.params.numbers : [];

  return (
    <List>
      {numbers.map((number) => (
        <ListItem>
          <TouchableOpacity onPress={() => Alert.alert(`calling ${number}`)}>
            <Text>{number}</Text>
          </TouchableOpacity>
        </ListItem>
      ))}
    </List>
  );
};

export default CallPage;
