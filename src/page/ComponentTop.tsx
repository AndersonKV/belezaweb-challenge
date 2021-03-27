import React from "react";

type Props = {
  selected: string;
};

const ComponenTop: React.FC<Props> = ({ selected }) => {
  return (
    <div className="main__top">
      <div>
        <span
          className={`text-gray bold ${
            selected === "SACOLA" ? "text-orange" : null
          }`}
        >
          SACOLA
        </span>
      </div>
      <div>
        <span
          className={`text-gray bold ${
            selected === "PAGAMENTO" ? "text-orange" : null
          }`}
        >
          PAGAMENTO
        </span>
      </div>
      <div
        className={`text-gray bold ${
          selected === "CONFIRMACAO" ? "text-orange" : null
        }`}
      >
        <span>CONFIRMAÇÃO</span>
      </div>
    </div>
  );
};

export default ComponenTop;
