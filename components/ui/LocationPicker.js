import { View, StyleSheet, Alert } from "react-native";
import OutlineButton from "./OutlineButton";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

function LocationPicker() {
  const navigation = useNavigation();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermission() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permission = await requestPermission();
      return permission.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "This app need location permission"
      );
      return false;
    }
    return true;
  }
  async function getLocationHandler() {
    const hasPermission = await verifyPermission();
    if (hasPermission) {
      const position = await getCurrentPositionAsync();
      console.log(position);
    }
  }
  function pickOnMapHandler() {
    navigation.navigate("Map");
  }
  return (
    <View>
      <View style={styles.loctPreview}></View>
      <View style={styles.action}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate user
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlineButton>
      </View>
    </View>
  );
}
export default LocationPicker;

const styles = StyleSheet.create({
  loctPreview: {
    marginTop: 8,
    marginBottom: 3,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
