import React from "react";

export default function getEmojiFromTemp(props) {
  if (props.temp <= 0) {
    return "🧤";
  }
  if (props.temp > 0 && props.temp <= 8) {
    return "🧣";
  }
  if (props.temp > 8 && props.temp <= 14) {
    return "🧥";
  }
  if (props.temp > 14 && props.temp <= 20) {
    return "👖";
  }
  if (props.temp > 20 && props.temp <= 24) {
    return "👕";
  }
  if (props.temp > 24 && props.temp <= 30) {
    return "🩳";
  } else {
    return "👙";
  }
}
