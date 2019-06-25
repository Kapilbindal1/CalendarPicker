/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
// const DEFAULT_SELECTED_BACKGROUND_COLOR = "rgb(175,175,175)";
const DEFAULT_SELECTED_BACKGROUND_COLOR = "rgb(0,0,0)";
const DEFAULT_SELECTED_TEXT_COLOR = "#fff";
const DEFAULT_SELECTED_DOT_COLOR = "#fff";
const DEFAULT_TODAY_BACKGROUD_COLOR = "#CCCCCC";

export function makeStyles(
  scaler,
  backgroundColor,
  textColor,
  todayBackgroundColor
) {
  const SELECTED_BG_COLOR = backgroundColor
    ? backgroundColor
    : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = textColor
    ? textColor
    : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor
    ? todayBackgroundColor
    : DEFAULT_TODAY_BACKGROUD_COLOR;
  return {
    calendar: {
      // height: 320 * scaler,
      marginTop: 10 * scaler
    },

    dayButton: {
      width: 22 * scaler,
      height: 22 * scaler,
      borderRadius: 22 * scaler,
      alignSelf: "center",
      justifyContent: "center"
    },

    dayLabel: {
      fontSize: 14 * scaler,
      color: "rgba(100,100,100,1)",
      alignSelf: "center"
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR
    },
    defaultDotStyle: {
      marginTop: 4,
      alignSelf: "center",
      color: "rgb(200,200,200)"
    },
    dayLabelsWrapper: {
      flexDirection: "row",
      borderBottomWidth: 0.6,
      // borderTopWidth: 1,
      paddingTop: 10 * scaler,
      paddingBottom: 10 * scaler,
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.0)",
      borderColor: "rgba(91,91,91,0.4)"
    },

    daysWrapper: {
      alignSelf: "center",
      justifyContent: "center"
    },

    dayLabels: {
      width: 50 * scaler,
      fontSize: 12 * scaler,
      color: "#000",
      textAlign: "center"
    },

    selectedDay: {
      width: 22 * scaler,
      height: 22 * scaler,
      borderRadius: 22 * scaler,
      alignSelf: "center",
      justifyContent: "center"
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR
    },

    selectedToday: {
      width: 22 * scaler,
      height: 22 * scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: 22 * scaler,
      alignSelf: "center",
      justifyContent: "center"
    },

    dayWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: 50 * scaler,

      marginTop: 4,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.10)"
    },

    startDayWrapper: {
      width: 50 * scaler,
      height: 30 * scaler,
      borderTopLeftRadius: 20 * scaler,
      borderBottomLeftRadius: 20 * scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center"
    },

    endDayWrapper: {
      width: 50 * scaler,
      height: 30 * scaler,
      borderTopRightRadius: 20 * scaler,
      borderBottomRightRadius: 20 * scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center"
    },

    inRangeDay: {
      width: 50 * scaler,
      height: 30 * scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: "center",
      justifyContent: "center"
    },

    monthLabel: {
      fontSize: 16 * scaler,
      color: "#000",
      marginBottom: 10 * scaler,
      width: 180 * scaler,
      textAlign: "center"
    },

    headerWrapper: {
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
      padding: 5 * scaler,
      paddingBottom: 3 * scaler,
      backgroundColor: "rgba(0,0,0,0.0)"
    },

    monthSelector: {
      marginBottom: 10 * scaler,
      fontSize: 14 * scaler,
      width: 80 * scaler
    },

    prev: {
      textAlign: "left"
    },

    next: {
      textAlign: "right"
    },

    yearLabel: {
      fontSize: 14 * scaler,
      fontWeight: "bold",
      color: "#000",
      textAlign: "center"
    },

    weeks: {
      flexDirection: "column"
    },

    weekRow: {
      flexDirection: "row"
    },

    disabledText: {
      fontSize: 14 * scaler,
      color: "#BBBBBB",
      alignSelf: "center",
      justifyContent: "center"
    }
  };
}
