import { calculateNumberOfStopsToShareAllGossips } from './GossipCalculator'

test('Bus drivers never share all the gossips', () => {
  const routes = [
    [2, 1, 2],
    [5, 2, 8]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe('never')
})

test('Two Bus drivers share all gossips on the first stop', () => {
  const routes = [
    [1, 2, 3],
    [1, 3, 2]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe(1)
})

test('Two Bus drivers share all gossips on the second stop', () => {
  const routes = [
    [1, 3, 2],
    [2, 3, 1]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe(2)
})

test('Two Bus drivers share all the gossips after the route repeated', () => {
  const routes = [
    [1, 3, 2],
    [2, 4, 1, 1]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe(4)
})

test('Two Bus drivers share all the gossips after the route is repeated', () => {
  const routes = [
    [2, 4, 1, 1],
    [1, 3, 2]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe(4)
})

test('Two Bus drivers never share all the gossips after the route is repeated in 8 hours', () => {
  const routes = [
    [2, 4, 1, 5],
    [1, 3, 2]
  ]
  const numberOfStops = calculateNumberOfStopsToShareAllGossips(routes)

  expect(numberOfStops).toBe('never')
})
