const carPassing = function (cars, speed) {
  let car = {
    speed: speed,
    time: Date.now(),
  };
  cars.push(car);
  return cars;
};
