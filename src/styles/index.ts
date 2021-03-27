import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1280px;
      min-height: 640px; */
  background-color: whitesmoke;
  height: 700px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    display: flex;
    flex-direction: column;
    background-color: red;
    border: 1px solid #d3d3d3;
    width: 400px;
    padding: 10px;
    margin-top: 80px;

    .check-custom {
      display: flex;
      align-self: center;
      align-content: center;
      margin-top: 10px;

      span {
        border-radius: 25px;
        border: 3px solid orange;
        padding: 10px;

        i {
          color: orange;
        }
      }
    }

    .details-about-user {
      background-color: white;
      display: flex;
      flex-direction: column;

      border: 1px solid #d3d3d3;
      border-radius: 5px;

      div {
        display: flex;
        flex-direction: column;
      }
    }

    .main__top {
      display: flex;
      background-color: gray;
      flex-direction: row;

      div {
        padding: 10px;
        background-color: white;
        width: 100%;
        cursor: pointer;

        span {
          &:hover {
            color: #8d8d8d;
          }
        }
      }
    }

    .main__middle {
      background-color: white;
      display: flex;
      flex-direction: column;
      border: 1px solid #d3d3d3;
      border-radius: 5px;

      input {
        padding: 10px;
        border: 1px solid #d3d3d3;

        &:focus {
          outline: none; /* oranges! yey */
          border: 1px solid #c2c2c2;
        }
      }

      .product {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
          width: 100px;
          height: 100%;
        }

        .price {
          text-align: right;

          span {
            margin-right: 10px;
          }
        }
      }
    }

    .main__bottom {
      display: flex;
      flex-direction: column;

      .details {
        display: flex;
        flex-direction: column;
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        margin-top: 10px;
        div {
          padding: 10px;
        }
      }

      button {
        margin-top: 10px;

        background-color: #f50057;
        cursor: pointer;
        padding: 15px;
        color: white;
        border: none;

        box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
          0 2px 4px -1px rgb(0 0 0 / 30%);

        &:hover {
          background-color: #00b69e;
        }
      }
    }
  }

  @media (min-width: 600px) {
    .main {
      background-color: purple;
    }
  }

  @media (min-width: 768px) {
    .main {
      background-color: gray;
    }
  }

  @media (min-width: 992px) {
    .main {
      background-color: blue;
    }
  }

  @media (min-width: 1200px) {
    .main {
      background-color: whitesmoke;
    }
  }

  .box-shadow {
    box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%),
      0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
  }

  .box-shadow-2 {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
  }

  .column {
    flex-direction: column;
  }

  .grid {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .grid-2 {
    padding: 20px;
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      width: 90%;

      input {
        width: 100%;
        height: 40px;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .text-gray {
    color: silver;
  }

  .text-orange {
    color: #ffae00;
  }
  .bold {
    font-weight: bold;
  }

  .justify-content__space-between {
    display: flex;
    justify-content: space-between;
  }
`;
