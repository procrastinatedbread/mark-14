const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

function calculateProfitandLoss(initial, quantiity, current) {
  if (quantiity < 0) {
    {
      outputEl.innerText = "Stocks can't have a negative value";
    }
  } else if (initial > current) {
    var loss = initial - current;
    var lossPercentage = (loss / initial) * 100;

    outputEl.innerText =
      "The loss is " + loss + " and the loss percentage is " + lossPercentage;
  } else if (initial < current) {
    var profit = current - initial;
    var profitPercentage = (profit / initial) * 100;

    outputEl.innerText =
      "The profit is " +
      profit +
      " and the profit percentage is " +
      profitPercentage;
  } else {
    outputEl.innerText = "No pain no gain, no gain no pain";
  }
}
function submitHandler() {
  var ip = initialPrice.value;
  var qty = stocksQuantity.value;
  var cp = currentPrice.value;
  calculateProfitandLoss(ip, qty, cp);
}
submitBtn.addEventListener("click", submitHandler);
