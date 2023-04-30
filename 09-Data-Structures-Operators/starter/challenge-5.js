const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// DRY code
const getDeparture = str => str.slice(0, 3).toUpperCase();

// It is possible to call a method on for-of statement
for (const flight of flights.split('+')) {
  const [departure, from, to, time] = flight.split(';');
  console.log(
    `${departure.startsWith('_Delayed') ? '🔴' : ''}${departure.replaceAll(
      '_',
      ' '
    )} from ${getDeparture(from)} to ${getDeparture(to)} (${time.replace(
      ':',
      'h'
    )})`.padStart(45)
  );
}
