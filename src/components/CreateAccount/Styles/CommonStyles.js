import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
  highlightText: {
    color: "#a1696f"
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  footNoteText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: 'center'
  },
  labelText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 3
  },
  whiteButtonOuter: {
    backgroundColor: "#ffffff",
    width: 265,
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  whiteButtonOuterCircle: {
    backgroundColor: "#ffffff",
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  whiteButtonText: {
    color: "#a1696f",
    fontSize: 13,
    fontWeight: "bold",
  },
  lightWhiteButtonOuter: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 265,
    height: 55,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  lightWhiteButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "ProximaNovaExtrabold",
  },
});

export default CommonStyles;
