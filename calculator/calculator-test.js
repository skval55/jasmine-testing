it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })
  ).toEqual("103.64");
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 19000, years: 10, rate: 4.0 })
  ).toEqual("192.37");
});

it("should return monthly rate with weirdest values", function () {
  expect(calculateMonthlyPayment({ amount: 120, years: 11, rate: 80 })).toEqual(
    "8.00"
  );
});

/// etc
