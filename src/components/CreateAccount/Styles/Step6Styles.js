import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const step6Styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 10,
  },
  scrollContainerOuter: {
    height: height * 0.45,
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 15,
    borderRadius: 10,
  },
  scrollContainer: {
    paddingBottom: 23,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    justifyContent: "space-between"
  },
  selectedCategoryButton: {
    backgroundColor: "#007bff",
  },
  expandIcon: {
    marginLeft: 10,
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
  },
  subCategoriesContainer: {
    marginLeft: 20,
  },
  subCategoryButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginRight: 10,
  },
  selectedSubCategoryButton: {
    backgroundColor: "#fff",
  },
  subCategoryText: {
    color: "#fff",
    fontSize: 16,
  },
  disclaimerText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});

export default step6Styles;
