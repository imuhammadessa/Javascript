const car = {
  Name: "Toyota",
  Model: 2006,
  Price: 140000,
  color: "White",
};

const showCarDetails = document.getElementById("showCarDetails");

showCarDetails.innerHTML =
  car.Name + " " + car.Model + " " + car.Price + " " + car.color;
