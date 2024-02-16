import React, { useState } from "react";
import "../App.css";

const Safe = () => {
  const [dataInput, setDataInput] = useState({
    inputOne: "",
    inputTwo: "",
    inputThree: "",
    inputFour: "",
  });

  const [dataItems, setDataItems] = useState({ item: "" });
  const [addItems, setAddItems] = useState([]);

  const getInputsValue = (e) => {
    const { name, value } = e.target;
    setDataInput((prevDataInput) => ({
      ...prevDataInput,
      [name]: parseInt(value),
    }));
  };

  const getItemsValue = (e) => {
    const { name, value } = e.target;
    setDataItems((prevDataItem) => ({
      ...prevDataItem,
      [name]: value,
    }));
  };

  const putItems = () => {
    if (dataItems.item.trim() !== "") {
      setAddItems([...addItems, dataItems]);
      setDataItems({ item: "" });
    }
  };

  const handleKey = (e) => {
    e.preventDefault();
    if (
      dataInput.inputOne === 2 &&
      dataInput.inputTwo === 4 &&
      dataInput.inputThree === 1 &&
      dataInput.inputFour === 7
    ) {
      putItems();
    }
  };

  return (
    <div className="safe">
      <div className="safe-title">
        <label>Put items in the safe</label>
        <input
          type="text"
          name="item"
          value={dataItems.item}
          onChange={getItemsValue}
          placeholder="put item"
        />
        <button onClick={putItems}>put item</button>
      </div>
      <div className="safe-container">
        <div>
          <form onSubmit={handleKey}>
            <h1>Safe</h1>
            <input
              type="number"
              name="inputOne"
              value={dataInput.inputOne}
              onChange={getInputsValue}
            />
            <input
              type="number"
              name="inputTwo"
              value={dataInput.inputTwo}
              onChange={getInputsValue}
            />
            <input
              type="number"
              name="inputThree"
              value={dataInput.inputThree}
              onChange={getInputsValue}
            />
            <input
              type="number"
              name="inputFour"
              value={dataInput.inputFour}
              onChange={getInputsValue}
            />
          </form>
        </div>
        <div className="items">
        <h1>Items</h1>
          {dataInput.inputOne === 2 &&
          dataInput.inputTwo === 4 &&
          dataInput.inputThree === 1 &&
          dataInput.inputFour === 7 ? (
            <div>
              <ul>
                {addItems.map((item, index) => (
                  <li key={index}>{item.item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Safe;
