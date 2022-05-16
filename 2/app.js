const axios = require("axios");

async function converToUSD(args) {
  const currency = args.map((el) => el.currency).join(",");
  const host = "api.frankfurter.app";
  const { data } = await axios.get(`https://${host}/latest?from=USD&to=${currency}`);
  const result = [];
  args.forEach((el) => {
    result.push(el.amount / data.rates[el.currency]);
  });
  return result;
}

const array = [
  { amount: 15000.0, currency: "IDR" },
  { amount: 3.1, currency: "EUR" },
];

converToUSD(array)
  .then((data) => console.log(data))
  .catch(console.error);
