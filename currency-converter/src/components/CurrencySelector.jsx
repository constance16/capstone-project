
const CurrencySelector = () => {
  const [currencies, setcurrencies] = useState([]);
  const [amount, setamount] = useState(1);

  

// Currencies -> https://api.frankfurter.app/currencies
// const fetchCurrencies =async () => {
//   try {
//     const res = await fetch("https://api.frankfurter.app/currencies");
//     const dat = await res.json()

//     setcurrencies(data);
//   } catch (error) {
//     console.error("Error fetching", error)
//   }
// };

// useEffect(() => {
// fetchCurrencies();
// }, []);

// console.log(currencies);


// Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

  return <div className="max-w-4xl mx-auto my-auto p-5 bg-white rounded-lg ">
    <h2 className="mb-6 text-2xl font-semibold text-gray-700">
      Currency Converter
    </h2>

    <div className="mt-8">
      <label 
      htmlFor="amount"  
      className="block text-sm font-medium text-black mb-2">Amount
      </label>
      
      <input
      // value={amount}
      // onChange={(e) => setamount(e.target.value)}
      type="number" 
      className=" w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
    </div>

    <div className="flex justify-end mt-6">
      <button className="w-full p-1.5 bg-violet-700 text-center text-white rounded-md hover:bg-gray-500 focus:outline-none">Convert</button>
    </div>

    <div className="mt-2 text-sm font-medium text-right text-gray-900">
      Amount: 899 USD
    </div>
  </div>

}

export default CurrencySelector














