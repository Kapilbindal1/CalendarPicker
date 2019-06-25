import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Controls({
  styles,
  textStyles,
  label,
  onPressControl,
  headerIconSize,
  showHeaderIcon,
  headerIconStyle
}) {
  return (
    <TouchableOpacity onPress={() => onPressControl()}>
      {!showHeaderIcon ? (
        <Text style={[styles, textStyles]}>{label}</Text>
      ) : (
        <MaterialIcon
          style={headerIconStyle}
          name={label}
          size={headerIconSize}
        />
      )}
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired
};
