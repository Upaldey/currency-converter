import { useState } from "react";
import "./App.css";
import InputBox from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter was pressed!");
      // You can trigger a function, update state, etc.
    }
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/29421577/pexels-photo-29421577.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                onKeyDown={keyDown}
                amount={convertedAmount}
                currencyOptions={option}
                amountDisable
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert from {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
