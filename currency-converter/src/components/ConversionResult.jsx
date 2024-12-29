


const convertCurrency = async () => {
  if (!amount) return;
  setConverting(true);
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );
    const data = await res.json();

    setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
  } catch (error) {
    console.error("Error Fetching", error);
  } finally {
    setConverting(false);
  }
};