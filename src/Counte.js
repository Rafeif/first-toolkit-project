import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  reset,
  increaseByAmount,
} from "./redux/counterSlice";

const Counte = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);
  const addValue = Number(incrementValue) || 0;
  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{marginBottom:"20px"}}>
          <button style={{marginRight:"3px"}}
            className="btn btn-outline-success"
            onClick={() => dispatch(increase())}
          >
            Increse <i class="fa-solid fa-plus"></i>{" "}
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(decrease())}
          >
            Decrease <i class="fa-solid fa-minus"></i>
          </button>
        </div>
        <p>{count}</p>
        <div>
          <button
            style={{ width: "100%" ,marginBottom:"3px"}}
            className="btn btn-outline-dark"
            onClick={resetAll}
          >
            reset <i class="fa-solid fa-rotate-left"></i>
          </button>
        </div>
        <div>
       </div>
        <button
          className="btn btn-outline-success"
          onClick={() => dispatch(increaseByAmount(addValue))}
        >
          increase By amount <i class="fa-solid fa-plus"></i>
        </button>  <input
          type="text"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
          style={{ width: "50px" ,marginRight:"2px",textAlign:"center"}}
        />
      </div>
    </div>
  );
};

export default Counte;
