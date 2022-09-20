import React, { useState } from "react";

import TopNav from "../Components/TopNav";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../product_lists.json";
import "./Home.css";

const Home = () => {
  const [cardDetail, setCardDetail] = useState([]);
const [cardOpen, setCardOpen] = useState(false);

  const handlecart = (ind) => {
    console.log(ind);
    products?.map((item) => {
      if (item.productId === ind) {
        console.log(item);
        setCardOpen(true);
       
          setCardDetail(item)
       
      }
    });
  };

  const Maincard = () => {
   {console.log(cardDetail)}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>;
  };
  return (
    <div
      style={{
        minHeight: "850px",
        minWidth: "99%",
        maxWidth: "99%",
        overflow: "hidden",
      }}
    >
      <TopNav />
      <div className="maindiv">
        {products?.map((item, ind) => {
          return (
            <div
              className="productbrief"
              onClick={() => {
                handlecart(item.productId);
              }}
            >
              <img
                src={item.imageURL}
                style={{
                  maxWidth: "40%",
                  minWidth: "40%",
                  maxHeight: "55%",
                  marginLeft: "120px",
                  marginTop: "30px",
                }}
              />
              <div>
                {item.name}
                {item.price} {item.discount}
              </div>
            </div>
          );
        })}
        {cardOpen && <Maincard cardDetail={cardDetail}/>}
      </div>
    </div>
  );
};

export default Home;
