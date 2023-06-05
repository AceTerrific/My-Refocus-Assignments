function BMI_calculator(weight, height) {
  //height in meter/inches
  //weight in kg/lb

  return weight / Math.pow(height, 2);
}

console.log(BMI_calculator(65, 1.5));
