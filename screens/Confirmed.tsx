import * as React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const confirmeds = [
  {
    id: "1",
    name: "Adalberto Shindy",
    avatar: "https://source.unsplash.com/weekly?avatar&shindy"
  },
  {
    id: "2",
    name: "Luiz Felipe",
    avatar: "https://source.unsplash.com/weekly?avatar&luiz"
  },
  {
    id: "3",
    name: "Bruno Contreras",
    avatar: "https://source.unsplash.com/weekly?avatar&bruno"
  },
  {
    id: "4",
    name: "Daniel Chang",
    avatar: "https://source.unsplash.com/weekly?avatar&daniel"
  },
  {
    id: "5",
    name: "Lucas M Sales",
    avatar: "https://source.unsplash.com/weekly?avatar&lucas"
  },
  {
    id: "6",
    name: "Victor Lopes",
    avatar: "https://source.unsplash.com/weekly?avatar&victor"
  },
];

export default function Confirmed({ route, navigation }: { route: any; navigation: any; }) {

  function handleNavigateTo(confirmed: {id: string, name: string, avatar: string}) {
    // navigation.navigate('Profile', { id: confirmed.id });
    alert(`indo para o perfil de ${confirmed.name}, com o id: ${confirmed.id}`)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoTitle}>Confirmados</Text>
      </View>

      {confirmeds.map((confirmed, index) => (
        <View key={index} style={styles.ConfirmedContainer}>
          <TouchableOpacity onPress={() => handleNavigateTo(confirmed)}>
            <View style={styles.ConfirmedContent}>
              <View style={styles.AvatarNameGroup}>
                <Image source={{ uri: confirmed.avatar }} style={styles.image} />
                <Text style={styles.ConfirmedName}>{confirmed.name}</Text>
              </View>
              <Ionicons name="chatbubble-ellipses-outline" size={25} color="#6951FF" />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  AvatarNameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  ConfirmedContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoTitle: {
    fontSize: 26,
    color: "#6951FF",
    fontWeight: "bold",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  ConfirmedContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,

    marginHorizontal: 15,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  ConfirmedName: {
    fontSize: 16,
  }
});
