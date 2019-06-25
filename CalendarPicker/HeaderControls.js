import React from "react";
import { View, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Utils } from "./Utils";
import Controls from "./Controls";

const deviceWidth = Dimensions.get("window").width;

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
    headerIconSize,
    showHeaderIcon,
    headerTextStyle,
    headerIconStyle
  } = props;
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : "Previous";
  const next = nextTitle ? nextTitle : "Next";
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          width: deviceWidth,
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 0
        }
      ]}
    >
      <Controls
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
        headerIconSize={headerIconSize}
        showHeaderIcon={showHeaderIcon}
        headerIconStyle={headerIconStyle}
      />
      <View>
        <Text style={headerTextStyle}>
          {month} {year}
        </Text>
      </View>
      <Controls
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
        headerIconSize={headerIconSize}
        showHeaderIcon={showHeaderIcon}
        headerIconStyle={headerIconStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func
};
