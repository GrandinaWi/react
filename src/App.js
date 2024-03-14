import logo from './logo.svg';
import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import axios from 'axios';
import {useQuery} from "react-query";
import Container from "./container";
import Skeleton from "./skeleton";
import Button from "./button";
async function fetchCoins(page){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'x5lzIXf6BdJfzWBdHQlDWutfShGEXL0xe3Ix3EbNkuA='
    }
  };
  const { data } = await axios.get(`https://openapiv1.coinstats.app/coins?limit=10&page=${page}`, options);
  return data.result;
}
function App() {
  const [page,setPage]=useState(1);
  const {data,isLoading,isError}=useQuery(['coins',page],()=>fetchCoins(page),{keepPreviousData:true});
  if (isLoading){
    return <Skeleton></Skeleton>
  }
  if (isError){
    return <h3>Ошибка при получении данных</h3>
  }
  if (!data){
    return <h3>Данных нет</h3>
  }

  return (
      <React.Fragment>
        <Container data={data}></Container>
        <Button name='Назад' onClick={() => setPage((p) => p - 1)} disabled={!page}>

        </Button>
        <Button name='Далее' onClick={() => setPage((p) => p + 1)}></Button>
      </React.Fragment>
  );
}

export default App;
