// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr) {
  appendTd(tr, "X");
  let removeBtn = tr.lastChild;
  removeBtn.addEventListener("click", function () {
    tr.remove();
    console.log(tr.id);
    for (let key in allPayments) {
      if (key === tr.id) {
        delete allPayments[key];
      }
    }
    for (let key in allServers) {
      if (key === tr.id) {
        delete allServers[key];
      }
    }
    updateServerTable();
    updateSummary();
  });
}
