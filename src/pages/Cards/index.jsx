import React from "react";
import Title from "../Title";
import { Card } from "antd";
import { AddShoppingCartOutlined, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "./style.module.css";
import { deleteToCart } from "../../store/cartSlice";

function Cards() {
  const cards = useSelector((state) => state.cart);
  const dispatch = useDispatch([]);
  console.log(cards);
  return (
    <section>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Title text={"Cards"} />
        <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
          {cards.length > 0 ? (
            cards.map(({ id, title, price, description, image }) => {
              return (
                <Card
                  hoverable
                  key={id}
                  style={{
                    width: 400,
                    margin: "16px",
                  }}
                  cover={
                    <img alt={title} src={image} width={400} height={350} />
                  }
                >
                  <Card.Meta
                    style={{
                      height: "150px",
                      fontSize: "15px",
                      borderTop: "2px solid black",
                      paddingTop: "10px",
                    }}
                    title={title}
                    description={
                      description.split(" ").slice(0, 20).join(" ") + "..."
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <h3 style={{ fontSize: "20px" }}>{price}$</h3>
                    <Delete
                      onClick={() =>
                        dispatch(
                          deleteToCart({ id, title, price, description, image })
                        )
                      }
                      className={icon}
                      fontSize="large"
                    />
                  </div>
                </Card>
              );
            })
          ) : (
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "red",
                marginTop: "50px",
              }}
            >
              Card is empty !
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cards;
