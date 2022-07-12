function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return;
  }

  let result = 0;
  result = length * width;
  return result;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return;
  }
  let result = 0;
  result = (base * height) / 2;
  return result;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return;
  }
  let result = 0;
  result = Math.PI * radius * radius;
  return result;
}
