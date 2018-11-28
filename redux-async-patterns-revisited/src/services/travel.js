async function delay(timeoutMS) {
  return new Promise(resolve => setTimeout(resolve, timeoutMS));
}

export async function getUser() {
  await delay(600);
  return {
    email : "somemockemail@email.com",
    repository: "http://github.com/username"
  };
}

export async function getDeparture(user) {
  await delay(500);
  return {
    userID : user.email,
    flightId : "AR1973",
    date : "10/27/2016 16:00PM"
  };
}

export async function getFlight(flightId) {
  await delay(900);
  return {
    id: flightId,
      pilot: "Jhonny Bravo",
      plane: {
        make: "Boeing 747 RC",
        model: "TA-889"
      },
      state: "onTime"
  }
}

export async function getForecast(date) {
  await delay(400);
  return {
    date: date,
    forecast: "rain"
  };
}
