import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    width: 300,
    maxWidth: "80%",
  },
});

export default Title;
