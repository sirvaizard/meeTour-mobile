import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import User from '../interfaces/user';
import Header from '../components/Header';

const avatar = "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/9/4/asset/e5cf8466bc6f/sub-buzz-11718-1591678685-12.png"

export default function Confirmed({ route, navigation }: { route: any, navigation: any; }) {

  const [participants, setParticipants] = useState<User[]>([]);

  function handleNavigateTo( userInfo: User ) {
    navigation.navigate('Perfil - MeeTour', { userInfo: userInfo });
  }

  useFocusEffect(useCallback(() => {
    setParticipants(route.params.participants);
  }, []));

  return (
    <ScrollView style={styles.container}>
      
      <Header title="Confirmados" />

      {participants.map((confirmed, index) => (
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
  AvatarNameGroup: {
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
  },
  ConfirmedContent: {
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  ConfirmedContainer: {
    backgroundColor: 'white',
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
    color: 'black',
    fontSize: 16,
  }
});
