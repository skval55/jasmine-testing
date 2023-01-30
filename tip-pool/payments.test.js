describe("payments test with set-up and tear down", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = "20";
    tipAmtInput.value = "5";
  });

  it("should return the bill amount, in the object", function () {
    submitPaymentInfo();

    expect(paymentId).toEqual(1);
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("20");
    expect(allPayments["payment1"].tipAmt).toEqual("5");
    expect(allPayments["payment1"].tipPercent).toEqual(25);
  });
  it("should not add a new payment on submitPaymentInfo() with empty input", function () {
    billAmtInput.value = "";
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });
  it("should return the bill amount, tip amount and tip percentage", function () {
    expect(createCurPayment()).toEqual({
      billAmt: "20",
      tipAmt: "5",
      tipPercent: 25,
    });
  });
  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentId = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerText = "";
    summaryTds[1].innerText = "";
    summaryTds[2].innerText = "";
    allPayments = {};
  });
});
