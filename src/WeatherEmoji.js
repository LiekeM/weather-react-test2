export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "🕶",
    "few-clouds-day": "🧢",
    "scattered-clouds-day": "📷",
    "broken-clouds-day": "🌂",
    "shower-rain-day": "☂️",
    "rain-day": "☔️",
    "thunderstorm-day": "🪁",
    "snow-day": "⛸️",
    "mist-day": "🦺",
    "clear-sky-night": "👡",
    "few-clouds-night": "👞",
    "scattered-clouds-night": "👢",
    "broken-clouds-night": "🌂",
    "shower-rain-night": "☂️",
    "rain-night": "☔️",
    "thunderstorm-night": "🥽",
    "snow-night": "⛸️",
    "mist-night": "🔦",
  };
  return codeMapping[props.code];
}
