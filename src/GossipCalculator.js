export const calculateNumberOfStopsToShareAllGossips = routes => {
  const busDriverNumberOne = routes[0]
  const busDriverNumberTwo = routes[1]

  const numberOfStops = getNumberOfStops(busDriverNumberOne, busDriverNumberTwo)

  return numberOfStops !== 'never' ? numberOfStops + 1 : 'never'
}

const hasShareGossip = (countStop, busDriverNumberOne, busDriverNumberTwo) => {
  return busDriverNumberOne[countStop % busDriverNumberOne.length] ===
  busDriverNumberTwo[countStop % busDriverNumberTwo.length]
}

const getNumberOfStops = (busDriverNumberOne, busDriverNumberTwo) => {
  let countStops = 0
  let numberOfStops = 'never'

  const maxRouteLength = busDriverNumberOne.length > busDriverNumberTwo.length
    ? busDriverNumberOne.length
    : busDriverNumberTwo.length

  for (countStops = 0; countStops < maxRouteLength; countStops++) {
    if (hasShareGossip(countStops, busDriverNumberOne, busDriverNumberTwo)) {
      numberOfStops = countStops
    }
  }
  return numberOfStops
}
