import React, {useState,useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useMenu } from '../../context/MenuContext';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const { dish, getDishById } = useMenu();
    
    useEffect(() => {
        console.log('id :>> ', id);
        console.log('object :>> ', getDishById(id)); 

    },[id])

    console.log(dish, 'dish');

    return (

        <ItemDetail/>

    )
}