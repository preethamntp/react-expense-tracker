import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction, index }) => {
  const { deleteTranscation } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li
        className={transaction.amount < 0 ? "minus" : "plus"}
        key={transaction + index}
      >
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTranscation(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
