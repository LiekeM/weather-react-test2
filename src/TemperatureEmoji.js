export default function getEmojiFromTemp(props) {
  if (props.temp <= 0) {
    return "๐งค";
  }
  if (props.temp > 0 && props.temp <= 8) {
    return "๐งฃ";
  }
  if (props.temp > 8 && props.temp <= 14) {
    return "๐งฅ";
  }
  if (props.temp > 14 && props.temp <= 20) {
    return "๐";
  }
  if (props.temp > 20 && props.temp <= 23) {
    return "๐";
  }
  if (props.temp > 23 && props.temp <= 25) {
    return "๐";
  }
  if (props.temp > 25 && props.temp <= 27) {
    return "๐ฝ";
  }
  if (props.temp > 27 && props.temp <= 32) {
    return "๐ฉณ";
  }
  if (props.temp > 32 && props.temp <= 35) {
    return "โฑ๏ธ";
  } else {
    return "๐";
  }
}
