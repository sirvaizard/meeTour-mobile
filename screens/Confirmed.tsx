import React, { useCallback, useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import User from '../interfaces/user';

const avatar = "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/9/4/asset/e5cf8466bc6f/sub-buzz-11718-1591678685-12.png"

const confirmeds = [
  {
    id: "1",
    name: "Adalberto Shindy",
  },
  {
    id: "2",
    name: "Luiz Felipe",
  },
  {
    id: "3",
    name: "Bruno Contreras",
  },
  {
    id: "4",
    name: "Daniel Chang",
  },
  {
    id: "5",
    name: "Lucas M Sales",
  },
  {
    id: "6",
    name: "Victor Lopes",
  },
];

export default function Confirmed({ route, navigation }: { route: any, navigation: any; }) {

  const [participants, setParticipants] = useState<User[]>([]);

  function handleNavigateTo(confirmed: { id: number }) {
    navigation.navigate('Perfil - MeeTour', { id: confirmed.id });
  }

  useFocusEffect(useCallback(() => {
    console.log(route.params.participants);
    setParticipants(route.params.participants);
  }, []));

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
                <Image source={{ uri: avatar }} style={styles.image} />
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
