import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../store/Cart-Context";

const GridCard = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const cartCntx = useContext(CartContext);

  const addToCartHandler = (id) => {
    const item = productsArr.filter((item) => item.id === id);
    console.log(item);
    cartCntx.addItem({ ...item[0], quantity: 1 });
  };

  const products = productsArr.map((product, index) => {
    return (
      <Col xs lg={6} key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Img
              src={product.imageUrl}
              style={{
                maxHeight: "20rem",
                maxWidth: "20rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "0px",
              }}
            >
              <span>Rs.{product.price}</span>
              <Button
                variant="primary"
                onClick={addToCartHandler.bind(null, product.id)}
              >
                Add-To-Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container className="mt-5">
      <Row>{products}</Row>
    </Container>
  );
};

export default GridCard;
