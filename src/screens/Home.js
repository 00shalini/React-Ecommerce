import { fontWeight } from "@mui/system";
import React, { useState } from "react";

import TopNav from "../Components/TopNav";
import products from "../product_lists.json";
import "./Home.css";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import close from '../assets/icons/close.png';

const Home = () => {
  const [cardDetail, setCardDetail] = useState([]);
const [cardOpen, setCardOpen] = useState(false);
const [count, setCount] = React.useState('');

const handleChange = (event) => {
 
  setCount(event.target.value);
};


  const handlecart = (ind) => {
    // console.log(ind);
    products?.map((item) => {
      if (item.productId === ind) {
        console.log(item);
        setCardOpen(true);
       
          setCardDetail(item)
       
      }
    });
  };

  const handleClose= () => {
    setCardOpen(false)
  } 

  const Maincard = ({cardDetail}) => {
//    {console.log(cardDetail)}
    return (<div className="card">
        <div>
        <img
                src={cardDetail.imageURL}
                style={{
                  maxWidth: "40%",
                  minWidth: "40%",
                  maxHeight: "55%",
                  marginLeft: "120px",
                  marginTop: "180px",
                }}
              />
        </div>
       <div style={{paddingTop:"70px"}}>
          <p style={{fontWeight:600,marginTop:'50px'}}>{cardDetail.name}</p>
          <span style={{fontSize:"15px"}}>${cardDetail.price} USD</span> <span style={{fontWeight:'600',fontSize:"15px",textDecoration:'line-through'}} >$ {(Number(cardDetail.discount)/100)*Number(cardDetail.price)} USD</span>
          <br/>
          <span style={{fontWeight:600}}>Brand:</span><span>{cardDetail.brandName}</span>
          <br/>
          <span style={{fontWeight:600}}>Category:</span><span>{cardDetail.category}</span>
          <br/>
          <span style={{fontWeight:600}}>Rating:</span><span>{cardDetail.rating}</span>
          <br/>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Count</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={count}
          label="Count *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <br/>
          <Button variant="contained" size="large" style={{marginTop:'30px'}}>
          Add To Cart
        </Button>
       </div>
        <div><img src={close} style={{width:'20px', marginTop:'20px', marginRight:'20px'}} onClick={handleClose}/></div>
        
    </div>);
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
    
      <div className="maindiv" style={cardOpen ? {zIndex:"-20",opacity:.1} : null}>
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
                <p style={{fontWeight:'600',fontSize:"15px",textAlign:'center'}}>{item.name}</p>
                <span style={{fontSize:"15px",textAlign:'center',marginLeft:'120px'}}>$ {item.price} USD</span> <span style={{fontWeight:'600',fontSize:"15px",textAlign:'center',textDecoration:'line-through'}} >$ {(Number(item.discount)/100)*Number(item.price)} USD</span>
              </div>
            </div>
          );
        })}
        
      </div>
      {console.log(cardOpen)}
         {cardOpen && <Maincard cardDetail={cardDetail}/>}
         
    </div>
  );
};

export default Home;
