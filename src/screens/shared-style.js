import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(60,145,242,1)"
  },
  headerText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(255,255,255,1.0)",
    letterSpacing: 1.28,
    lineHeight: 19
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(253,253,253,1.0)",
    paddingHorizontal: 16,
    paddingTop: 24
  },
  titleText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(81,81,81,1.0)",
    letterSpacing: 1.28,
    lineHeight: 19
  },
  textInputStyle: {
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 24,
    padding: 16,
    backgroundColor: "rgba(255,255,255,1.0)",
    borderRadius: 4,
    elevation: 2
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 25,
  },
  counterRectangle: {
    width: width * 0.44,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    minHeight: 116,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 3
  },
  counterNumber: {
    fontFamily: "OpenSans",
    //fontWeight: '400',
    fontSize: 52,
    color: "rgba(81,81,81,1.0)"
  },
  counterText: {
    fontFamily: "OpenSans",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 1,
    color: "rgba(74,144,226,1)"
  },
  goalCard: {
    marginTop: 16,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,1)",
    //minHeight: 75,
    elevation: 3,
    //borderWidth: 1
    marginBottom: 3,
    borderLeftWidth: 6,
    borderLeftColor: "rgba(74,144,226,1)"
  },
  goalDetailWrapper: {
    paddingVertical: 16,
    flex: 20,
    justifyContent: "center",
    paddingLeft: 22
  },
  goalTitleText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 16,
    color: "rgba(81,81,81,1.0)",
    color: "rgba(81,81,81,1.0)",
    letterSpacing: 1.5,
    lineHeight: 19
  },
  goalBriefText: {
    fontFamily: "OpenSans",
    fontSize: 14,
    //color: "rgba(196,196,196,1)",
    color: "#949494",
    letterSpacing: 1.5,
    lineHeight: 19,
    marginTop: 6
  },
  dayOptionContainer: {
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12
  },
  rewardsFormContainer: {
    marginTop: 12,
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    elevation: 2
  },
  rewardsTextInput: {
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 20,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(216,216,216,1)"
  },
  buttonSave: {
    paddingVertical: 12,
    backgroundColor: "rgba(44,110,183,1)",
    borderRadius: 5
  },
  buttonSaveText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(255,255,255,1.0)",
    letterSpacing: 1.28,
    textAlign: "center"
  }
});

export default styles;
