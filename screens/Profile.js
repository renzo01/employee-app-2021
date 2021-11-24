import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Profile = (props) => {
  const { id, name, picture, phone, salary, email, position } =
    props.route.params.user;
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:921752732");
    } else {
      Linking.openURL("telprompt:+51921752732");
    }
  };
  return (
    <View style={style.root}>
      <LinearGradient
        colors={["#0033ff", "#6bc1ff"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: -50,
          }}
          source={{
            uri: picture,
          }}
        />
      </View>
      <View style={{ alignItems: "center", margin: 15 }}>
        <Title>{name}</Title>
        <Text style={{ fontSize: 15 }}>{position}</Text>
      </View>
      <Card
        style={style.myCard}
        onPress={() => {
          Linking.openURL(`mailto:${email}`).catch((error) =>
            console.log(error)
          );
        }}
      >
        <View style={style.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={style.myText}>{email}</Text>
        </View>
      </Card>
      <Card
        style={style.myCard}
        onPress={() => {
          // openDial();
          Linking.openURL(`tel:${phone}`).catch((error) => console.log(error));
        }}
      >
        <View style={style.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={style.myText}>{phone}</Text>
        </View>
      </Card>
      <Card style={style.myCard}>
        <View style={style.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={style.myText}>{salary}</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 5,
        }}
      >
        <Button icon="account-edit" mode="contained" theme={theme}>
          Edit
        </Button>
        <Button icon="delete" mode="contained" theme={theme}>
          Fire employee
        </Button>
      </View>
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
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
});
export default Profile;
