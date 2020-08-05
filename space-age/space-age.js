//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Given an age in seconds, calculate how old someone would be on
// seonds in year
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or
// 31557600 seconds = 1 earth years
//

export const age = (planet, seconds) => {
      const earthYrsPerRotation = 1/orbits[planet]

      return parseFloat(((seconds/31557600)*earthYrsPerRotation).toFixed(2))

};

const orbits = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
}
