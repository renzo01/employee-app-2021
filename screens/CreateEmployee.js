import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Constants from "expo-constants";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <View style={style.root}>
      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        theme={theme}
        style={style.inputStyle}
        onChangeText={(enterText) => {
          setName(enterText);
        }}
      />
      <TextInput
        label="Phone"
        value={phone}
        mode="outlined"
        theme={theme}
        keyboardType="number-pad"
        style={style.inputStyle}
        onChangeText={(enterText) => {
          setPhone(enterText);
        }}
      />
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        theme={theme}
        style={style.inputStyle}
        onChangeText={(enterText) => {
          setEmail(enterText);
        }}
      />
      <TextInput
        label="Salary"
        value={salary}
        mode="outlined"
        theme={theme}
        style={style.inputStyle}
        onChangeText={(enterText) => {
          setSalary(enterText);
        }}
      />
      <Button
        icon="upload"
        style={style.inputStyle}
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        style={style.inputStyle}
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme}
      >
        Save Image
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={style.modalView}>
          <View style={style.modalButtonView}>
            <Button
              icon="camera"
              mode="contained"
              theme={theme}
              onPress={() => console.log("Presses")}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => console.log("Presses")}
            >
              Gallery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};
const theme = {
  colors: {
    primary: "#006eff",
  },
};
const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "white",
  },
});

export default CreateEmployee;
