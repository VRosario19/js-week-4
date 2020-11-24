function averg(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

averg([10, 10, 10, 10]);

console.log(averg([10, 10, 10, 10]));
