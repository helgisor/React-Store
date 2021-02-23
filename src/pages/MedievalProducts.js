import React, { useContext } from 'react';
import { ProductContext } from '../context/products';
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
import Filters from "../components/Products/Filters"
import PageMedievalProducts from "../components/Products/PageMedievalProducts"

export default function MedievalProducts() {
  const { loading, products, sorted } = React.useContext(ProductContext);

  if (loading) {
    return <Loading/>
  }
  return <>
  <Filters/>
  <PageMedievalProducts/>
  </>

}
