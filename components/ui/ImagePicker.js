import { View, Button, Alert, Text, StyleSheet, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

import { Colors } from "../../constants/Colors";
import OutlineButton from "./OutlineButton";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "This app need camera permission"
      );
      return false;
    }

    return true;
  }
  async function takePhotoHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.assets[0]);
  }
  let imagePreview = <Text>No image taken yet</Text>;
  if (pickedImage) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImage.uri }} />
    );
  }
  return (
    <View>
      <View style={styles.preview}>{imagePreview}</View>
      <OutlineButton icon="camera" onPress={takePhotoHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}
export default ImagePicker;

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
