import React, {useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useMenu } from '../../context/MenuContext';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const { dish, getDishById } = useMenu();
    
    useEffect(() => {
        getDishById(id);

    },[id])

    return (

        <ItemDetail dish={dish}/>

    )
}