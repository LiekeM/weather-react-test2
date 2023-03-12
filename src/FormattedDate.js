import React from "react";

export default function FormattedDate(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekDay = weekDays[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let monthDay = props.date.getDate();

  // let hours = props.date.getHours();
  // if (hours < 10) {
  //   hours = `0${hours}`;
  // }
  // let minutes = props.date.getMinutes();
  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }
  return (
    <div>
      {weekDay}, {month} {monthDay}
    </div>
  );
}
