export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "πΆ",
    "few-clouds-day": "π§’",
    "scattered-clouds-day": "π·",
    "broken-clouds-day": "π",
    "shower-rain-day": "βοΈ",
    "rain-day": "βοΈ",
    "thunderstorm-day": "πͺ",
    "snow-day": "βΈοΈ",
    "mist-day": "π¦Ί",
    "clear-sky-night": "π‘",
    "few-clouds-night": "π",
    "scattered-clouds-night": "π’",
    "broken-clouds-night": "π",
    "shower-rain-night": "βοΈ",
    "rain-night": "βοΈ",
    "thunderstorm-night": "π₯½",
    "snow-night": "βΈοΈ",
    "mist-night": "π¦",
  };
  return codeMapping[props.code];
}
