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
  if (props.temp > 24 && props.temp <= 26) {
    return "🎽";
  }
  if (props.temp > 26 && props.temp <= 32) {
    return "🩳";
  }
  if (props.temp > 32 && props.temp <= 35) {
    return "⛱️";
  } else {
    return "👙";
  }
}
