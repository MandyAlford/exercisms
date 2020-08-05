//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//gigasecond is 10^9 (1,000,000,000) seconds.
// millisecond is (1,000) seconds

export const gigasecond = (date) => {
  // date => seconds
  const dateInMilliseconds = date.getTime()
  const dateInSeconds = dateInMilliseconds/1000

  // seconds + 1000000000

   const futureDateInSeconds = dateInSeconds + 1000000000

  // convert into milliseconds

  const futureDateInMilliseconds = futureDateInSeconds * 1000
  // convert into Date object
  return new Date(futureDateInMilliseconds)

};
