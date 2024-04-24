/**
 * This function calculates the remaining time to complete all deliveries within a specific time period.
 *
 * @param {Array} deliveries - An array of strings where each string represents the time taken for a delivery in the format 'hh:mm:ss'.
 *
 * @returns {String} A string representing the remaining time to complete all deliveries in the format 'hh:mm:ss'. If the total delivery time does not exceed the total period, the returned string will start with a '-' sign indicating that the deliveries will be completed within the given period and there is still time left in the day.
 *
 * @throws {Error} Throws an error if the input is not an array of strings with the format 'hh:mm:ss' or if any time is not valid (i.e., not between '00:00:00' and '23:59:59').
 */
function calculateTime(deliveries) {
  let INITIAL_TIME = '00:00:00'
  let FINAL_TIME = '07:00:00'

  if (
    !Array.isArray(deliveries) ||
    !deliveries.every(
      time =>
        typeof time === 'string' &&
        time.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/) &&
        time.trim() !== ''
    )
  ) {
    throw new Error('Input is not an array of strings with the format hh:mm:ss')
  }

  const initialTime = INITIAL_TIME ? INITIAL_TIME : '00:00:00'

  const finalTime = FINAL_TIME ? FINAL_TIME : '07:00:00'

  const [initialHours, initialMinutes, initialSeconds] = initialTime
    .split(':')
    .map(Number)

  const initialTimeInSeconds =
    initialHours * 3600 + initialMinutes * 60 + initialSeconds

  const [finalHours, finalMinutes, finalSeconds] = finalTime
    .split(':')
    .map(Number)

  const finalTimeInSeconds =
    finalHours * 3600 + finalMinutes * 60 + finalSeconds

  const totalPeriodInSeconds = finalTimeInSeconds - initialTimeInSeconds

  let totalDeliveryTimeInSeconds = 0

  for (let i = 0; i < deliveries.length; i++) {
    const [deliveryHours, deliveryMinutes, deliverySeconds] = deliveries[i]
      .split(':')
      .map(Number)

    // Check if the time is valid between 00:00:00 and 23:59:59
    if (
      deliveryHours < 0 ||
      deliveryHours > 23 ||
      deliveryMinutes < 0 ||
      deliveryMinutes > 59 ||
      deliverySeconds < 0 ||
      deliverySeconds > 59
    ) {
      throw new Error('Invalid time')
    }

    totalDeliveryTimeInSeconds +=
      deliveryHours * 3600 + deliveryMinutes * 60 + deliverySeconds
  }

  let remainingTimeInSeconds = totalPeriodInSeconds - totalDeliveryTimeInSeconds

  let remainingHours = Math.floor(Math.abs(remainingTimeInSeconds) / 3600)
  let remainingTimeInSecondsForMinutes = remainingTimeInSeconds % 3600
  let remainingMinutes = Math.floor(
    Math.abs(remainingTimeInSecondsForMinutes) / 60
  )
  let remainingTimeInSecondsForSeconds = remainingTimeInSecondsForMinutes % 60
  let remainingSeconds = Math.abs(remainingTimeInSecondsForSeconds)

  let remainingTime = `${remainingTimeInSeconds > 0 ? '-' : ''}${remainingHours
    .toString()
    .padStart(2, '0')}:${remainingMinutes
    .toString()
    .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`

  return remainingTime
}

export default calculateTime
