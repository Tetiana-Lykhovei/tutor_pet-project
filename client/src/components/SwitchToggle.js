import React, { useState } from "react";
import Switch from "react-switch";

const SwitchToggle = () => {
  const [expense, setExpense] = useState(false);
  const handleChange = (nextExpense) => {
    setExpense(nextExpense);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        width: "220px",
      }}
    >
      <p style={{ color: expense ? "" : "#24CCA7" }}>
        <strong>Доход</strong>
      </p>
      <label htmlFor="small-radius-switch">
        <Switch
          checked={expense}
          onChange={handleChange}
          offColor="#E0E0E0"
          onColor="#E0E0E0"
          onHandleColor="#FF6596"
          offHandleColor="24CCA7"
          handleDiameter={44}
          activeBoxShadow="1px solid #E0E0E0"
          height={40}
          width={80}
          borderRadius={"30px"}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "#E0E0E0",
              }}
            >
              Off
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "#E0E0E0",
              }}
            >
              On
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "100%",
                color: "white",
                fontSize: 35,
              }}
            >
              &#43;
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "100%",
                color: "white",
                fontSize: 35,
              }}
            >
              &#8722;
            </div>
          }
        />
      </label>
      <p style={{ color: expense ? "#FF6596" : "" }}>
        <strong>Расход</strong>
      </p>
      {expense === true && <h3>insert here</h3>}
    </div>
  );
};

export default SwitchToggle;
