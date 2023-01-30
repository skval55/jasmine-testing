describe("Utilities test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("should return the total of all the bill amounts", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(300);
  });

  it("should return the total of all the tip amounts", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(60);
  });
  it("should return the total of all the tip percentages ", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should remove a row from the table and delete info from objects and update other tables", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerText = "";
    summaryTds[1].innerText = "";
    summaryTds[2].innerText = "";
    allPayments = {};
    paymentId = 0;
  });
});
