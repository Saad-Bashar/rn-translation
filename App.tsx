import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";
import "./translation";
import i18n from "./translation";

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{t("welcome")}</Text>
      <Button
        title="Change language to BAHASA MALAYSIA"
        onPress={() => i18n.changeLanguage("bm")}
      />
      <Button
        title="Change language to ENGLISH"
        onPress={() => i18n.changeLanguage("en")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
