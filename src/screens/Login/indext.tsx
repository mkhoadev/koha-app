import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  AppleIcon,
  EmailOutlineIcon,
  EyeOutlineIcon,
  GoogleIcon,
  LeftArrowWhiteIcon,
  PasswordOutlineIcon,
} from "../../../assets/svgs/login";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [focusInput, setFocusInput] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={[styles.container, { width, height }]}>
      <SafeAreaView>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            style={{ position: "absolute", left: 0 }}
          >
            <LeftArrowWhiteIcon />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Sign In</Text>
        </View>

        <View style={[styles.fieldItem, { width: width - 48 }]}>
          <Text style={styles.textField}>Email Address</Text>
          <View
            style={[styles.inputField, { borderColor: focusInput.email ? "#8FFF00" : "#929292" }]}
          >
            <EmailOutlineIcon color={focusInput.email ? "#FFFFFF" : "#64748B"} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#94A3B8"
              style={[
                styles.input,
                { width: width - 114, color: focusInput.email ? "#FFFFFF" : "#94A3B8" },
              ]}
              onFocus={() => setFocusInput((cur) => ({ ...cur, email: true }))}
              onBlur={() => setFocusInput((cur) => ({ ...cur, email: false }))}
            />
          </View>
        </View>

        <View style={[styles.fieldItem, { width: width - 48 }]}>
          <Text style={styles.textField}>Password</Text>
          <View
            style={[
              styles.inputField,
              { borderColor: focusInput.password ? "#8FFF00" : "#929292" },
            ]}
          >
            <PasswordOutlineIcon color={focusInput.password ? "#FFFFFF" : "#64748B"} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
              style={[
                styles.input,
                { width: width - 148, color: focusInput.email ? "#FFFFFF" : "#94A3B8" },
              ]}
              secureTextEntry={showPassword}
              onFocus={() => setFocusInput((cur) => ({ ...cur, password: true }))}
              onBlur={() => setFocusInput((cur) => ({ ...cur, password: false }))}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <EyeOutlineIcon color={focusInput.password ? "#FFFFFF" : "#64748B"} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#8FFF00", marginBottom: 24 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.textButton}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#FFFFFF",
            textAlign: "center",
            marginVertical: 24,
          }}
        >
          OR
        </Text>

        <View style={{ flexDirection: "column", gap: 16 }}>
          <TouchableOpacity>
            <View
              style={[
                styles.button,
                { backgroundColor: "#000000", borderWidth: 1, borderColor: "#FFFFFF" },
              ]}
            >
              <AppleIcon />
              <Text style={[styles.textButton, { color: "#FFFFFF" }]}>Continue with Apple</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.button,
                { backgroundColor: "#000000", borderWidth: 1, borderColor: "#FFFFFF" },
              ]}
            >
              <GoogleIcon />
              <Text style={[styles.textButton, { color: "#FFFFFF" }]}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View
        style={{
          marginTop: 24,
          position: "absolute",
          bottom: 32,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          Don’t have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ fontSize: 14, color: "#8FFF00", textAlign: "center", fontWeight: "700" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 56 },
  textTitle: { fontSize: 18, fontWeight: "700", color: "#FFFFFF" },
  fieldItem: { marginBottom: 16 },
  inputField: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#929292",
    borderRadius: 16,
    gap: 12,
  },
  input: {
    height: 56,
    color: "#94A3B8",
  },
  textField: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  button: {
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8FFF00",
    borderRadius: 16,
    gap: 16,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "700",
  },
});
