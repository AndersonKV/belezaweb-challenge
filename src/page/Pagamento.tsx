import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";

import { Container } from "../styles/index";
import { IData } from "../types/index";

import ComponentTop from "./ComponentTop";

interface Props extends RouteComponentProps<any> {
  history: any;
}

const App: React.FC<Props> = ({ history }) => {
  const [data, setData] = useState<IData[]>();
  const [selected, setSelected] = useState("PAGAMENTO");
  const [cardNumber, setCartNumber] = useState("");
  const [title, setTitle] = useState("");
  const [cvv, setCvv] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    async function init() {
      const URL_TO_FETCH = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";
      fetch(URL_TO_FETCH, {
        method: "get", // opcional
      })
        .then(function (response) {
          response.json().then((data) => {
            setData(data.items);
            console.log(data.items);
          });
        })
        .catch(function (err) {
          console.error(err);
        });

      setLoading(true);
    }
    init();
  }, []);
  const calculateTotalValue = (param: any) => {
    const value = param as IData[];
    const price: number[] = [];

    value &&
      value.forEach((element, index, arr) => {
        price.push(element.product.priceSpecification.originalPrice);
      });

    const result = price.reduce((b, f) => b + f, 0);

    return result || 0;
  };

  const formateCardNumber = (value: any) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  const formateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onSubmit = async () => {
    const myCalander = date
      .replaceAll("-", " ")
      .split(" ")
      .reverse()
      .toString()
      .replaceAll(",", "-");

    const cardNumberCut = cardNumber.split(" ");
    const formated = `****.****.***.${cardNumberCut[3]}`;

    const cardValue = {
      cardNumber: formated,
      title: title,
      calendar: myCalander,
      cvv: cvv,
    };

    const stringifiedArray = JSON.stringify(cardValue);
    localStorage.setItem("data", stringifiedArray);
    history.push("/pagamento/confirmacao");
  };

  const ComponentBottomValue = () => {
    return (
      <div className="main__bottom ">
        <div className="details  box-shadow-2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>PRODUTOS</span>
            <span className="bold">{calculateTotalValue(data)}</span>
          </div>
          <div>
            <span>FRETES</span>
          </div>
          <div>
            <span className="text-orange bold">DESCONTO</span>
          </div>
          <div className="justify-content__space-between">
            <span className="bold">Total</span>
            <span className="bold">{calculateTotalValue(data)}</span>
          </div>
        </div>
        <button className="bold" style={{ fontSize: "1.3em" }}>
          FINALIZAR PEDIDO
        </button>
      </div>
    );
  };

  return (
    <Container>
      {loading === true ? (
        <form className="main box-shadow" onSubmit={handleSubmit(onSubmit)}>
          <ComponentTop selected={selected} />
          <div className="grid">
            <h3 className="text-center text-gray">CARTÃO DE CRÉDITO</h3>
          </div>
          <div className="main__middle column">
            <div className="grid">
              <label htmlFor="cart-number" className="text-gray bold">
                Número do cartão
              </label>
              <input
                onChange={(event) => {
                  const { value } = event.target;
                  setCartNumber(formateCardNumber(value));
                }}
                value={cardNumber}
                ref={register}
                id="cart-number"
                type="tel"
                inputMode="numeric"
                autoComplete="cc-number"
                pattern="[0-9\s]{13,19}"
                maxLength={19}
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            </div>
            <div className="grid">
              <label className="text-gray bold" htmlFor="title">
                Nome do titulo
              </label>
              <input
                type="text"
                id="title"
                value={title}
                required
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="grid-2">
              <div>
                <label htmlFor="date" className="text-gray bold">
                  (dia/més/ano)
                </label>
                <input
                  type="date"
                  value={date}
                  name="date"
                  id="date"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  pattern="[0-9\s]{13,19}"
                  maxLength={8}
                  placeholder="xx/xxxx"
                  required
                  onChange={(event) => formateDate(event)}
                />
              </div>
              <div>
                <label className="text-gray bold" htmlFor="cvv">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  minLength={4}
                  maxLength={4}
                  required
                  onChange={(event) => setCvv(event.target.value)}
                />
              </div>
            </div>
          </div>
          <ComponentBottomValue />
        </form>
      ) : (
        <span>carregando...</span>
      )}
    </Container>
  );
};

export default App;
