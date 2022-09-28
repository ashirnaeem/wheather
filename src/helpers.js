export const dateBuilder = (d) => {
  console.log(d);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[d.getDay()];
  // const date = d.getDate();
  // const month = months[d.getMonth()];
  // const year = d.getFullYear();

  return `${day} `;
};
