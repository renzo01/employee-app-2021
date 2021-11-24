import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";
const Home = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: "Naki Dejo",
      email: "Naki@example.com",
      salary: 4000,
      phone: "9121232",
      position: "Backend Spring Boot Developer",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHTZ5FbyhOAbw/profile-displayphoto-shrink_800_800/0/1630904110548?e=1642032000&v=beta&t=ve27e7qVgJGbtP-uBeNKODTlHrSMgPXZtQJD2-if6-8",
    },
    {
      id: 2,
      name: "Renzo Gomez",
      email: "renzogomez577@gmail.com",
      salary: 2100,
      position: "Web Developer",
      phone: "921752732",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4E03AQElORzeb8onrw/profile-displayphoto-shrink_800_800/0/1562703336127?e=1643241600&v=beta&t=ZI_OUJKL3TncjTSTNUwPwY57YOka6WH6AJeKnsJBOOY",
    },
    {
      id: 3,
      name: "Cosme Fulanito",
      position: "DBA Designer",
      salary: 930,
      email: "cosme@example.com",
      phone: "912321412",
      picture:
        "https://pm1.narvii.com/7099/1f16e71c5652c4a72541b8ba60705b921dca695er1-559-643v2_hq.jpg",
    },
  ];
  const renderList = (user) => {
    return (
      <Card
        style={style.myCard}
        onPress={() => navigation.navigate("Profile", { user })}
      >
        <View style={style.cardView}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={{
              uri: user.picture,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={style.text}>{user.name}</Text>
            <Text style={style.text}>{user.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        onPress={() => props.navigation.navigate("Create")}
        style={style.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "#006eff" } }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
