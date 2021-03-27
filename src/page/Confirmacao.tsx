import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Container } from "../styles/index";
import { IData } from "../types/index";
import ComponentTop from "./ComponentTop";

interface Props extends RouteComponentProps<any> {
  history: any;
}

interface FinalDate {
  calendar: string;
  cardNumber: string;
  cvv: string;
  title: string;
}
const Confirmacao: React.FC<Props> = ({ history }) => {
  const [data, setData] = useState<IData[]>();
  const [finalDate, setFinalDate] = useState<FinalDate>();
  const [selected, setSelected] = useState("CONFIRMACAO");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      const getLocalStorage = localStorage.getItem("data");

      if (getLocalStorage) {
        setFinalDate(JSON.parse(getLocalStorage));
      }

      console.log("iniciando");
      const URL_TO_FETCH = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";
      fetch(URL_TO_FETCH, {
        method: "get", // opcional
      })
        .then(function (response) {
          response.json().then((data) => {
            setData(data.items);
          });
        })
        .catch(function (err) {
          console.error(err);
        });

      setLoading(true);
    }
    init();
  }, []);

  function percentage(partialValue: number, totalValue: number) {
    const value = (100 * partialValue) / totalValue;
    return parseFloat(value.toFixed(2));
  }

  const calculateTotalValue = (param: any) => {
    const value = param as IData[];
    const price: number[] = [];

    value &&
      value.forEach((element, index, arr) => {
        const { originalPrice } = element.product.priceSpecification;

        price.push(originalPrice);
      });

    const result = price.reduce((b, f) => b + f, 0);

    return result || 0;
  };

  const calculateDiscount = (param: any) => {
    const discountArr: number[] = [];

    param &&
      param.forEach((element: IData) => {
        const { discount } = element.product.priceSpecification;
        const { originalPrice } = element.product.priceSpecification;

        if (discount !== 0) {
          const reciveDiscount = percentage(discount, originalPrice);
          discountArr.push(reciveDiscount);
        }
      });

    const result = discountArr.reduce((b, f) => b + f, 0);

    return result || 0;
  };

  const calculateTotalValueDiscount = (param: any) => {
    const value = param as IData[];
    const price: number[] = [];

    value &&
      value.forEach((element, index, arr) => {
        const {
          discount,
          originalPrice,
          percent,
        } = element.product.priceSpecification;

        if (discount !== 0) {
          const reciveDiscount = percentage(discount, originalPrice);
          price.push(originalPrice - reciveDiscount);
        } else {
          price.push(originalPrice);
        }
      });

    const result = price.reduce((b, f) => b + f, 0);

    return result || 0;
  };

  const ComponentConfirmacao = () => {
    return (
      <div className="main box-shadow" style={{ marginTop: "230px" }}>
        <ComponentTop selected={selected} />
        <div className="check-custom">
          <span>
            <i className="fas fa-check"></i>
          </span>
        </div>
        <span className="text-orange text-center bold">
          PAGAMENTO EFETUADO COM SUCESSO
        </span>
        <div className="grid">
          <span className="text-gray bold">PAGAMENTO</span>
        </div>
        <div className="grid details-about-user">
          <div>
            <span>{finalDate?.cardNumber || "xxxx"}</span>
            <span>{finalDate?.title || "xxxx"}</span>
            <span>{finalDate?.calendar || "xxxx"}</span>
          </div>
        </div>
        <div className="grid">
          <span className="text-center text-orange bold">
            COMPRA EFETUADA COM SUCESSO
          </span>
        </div>
        <div className="grid">
          <h3 className="text-gray">PRODUTOS</h3>
        </div>
        <div className="main__middle column">
          {data?.map((product) => {
            return (
              <div className="product">
                <div>
                  <img
                    src={product.product.imageObjects[0].large}
                    alt="product content"
                  />
                </div>
                <div>
                  <span>{product.product.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="main__bottom">
          <div className="details  box-shadow-2">
            <div className="justify-content__space-between">
              <span>PRODUTOS</span>
              <span className="bold">{calculateTotalValue(data)}</span>
            </div>
            <div className="justify-content__space-between">
              <span>FRETES</span>
              <span className="bold">$R 5.30</span>
            </div>
            <div className="justify-content__space-between">
              <span className="text-orange bold">DESCONTO</span>
              <span className="bold">R$ {calculateDiscount(data)}</span>
            </div>
            <div className="justify-content__space-between">
              <span className="bold">Total</span>
              <span className="bold">
                R$ {calculateTotalValueDiscount(data)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container>
      {loading === true ? <ComponentConfirmacao /> : <span>carregando...</span>}
    </Container>
  );
};

export default Confirmacao;
