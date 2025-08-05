import React from "react";

function Card() {
  return (
    <div className="card mb-4 bg-white rounded-[8px] px-[10px] py-3">
      <div className=" pb-4 flex justify-between">
        <div className="text-[16px] text-gray-500">From</div>
        <div className="text-[16px] text-gray-500">Currency Type</div>
      </div>
      <div className="flex justify-between">
        <div>0</div>
        <div>
          <select className="bg-gray-200 rounded" name="currency" id="currency">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="CUSD">CUSD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Card;
