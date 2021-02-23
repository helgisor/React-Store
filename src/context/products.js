import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import items from '../utils/items';
import {
  featuredProducts,
  flattenProducts,
  paginate,
  medievalProducts,
} from '../utils/helpers';
export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [categories, setCategories] = React.useState([]);
  const [medieval, setMedieval] = React.useState([]);
  const [filters, setFilters] = React.useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all',

    specific: 'all',
    category2: 'all',
    category3: 'all',
  });

  React.useEffect(() => {
    const featured = featuredProducts(items);
    const products = items;
    setSorted(paginate(products));

    setMedieval(paginate(medievalProducts(products)));
    setProducts(products);
    setFeatured(featured);
  }, []);

  React.useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const {
      search,
      category,
      category2,
      category3,
      shipping,
      price,
      specific,
    } = filters;

    if (category !== 'all') {
      newProducts = newProducts.filter(
        (item) => item.category === category || item.category2 || item.category3
      );
    }

    if (specific !== 'all') {
      newProducts = newProducts.filter((item) => item.specific === specific);
    }

    if (shipping !== false) {
      newProducts = newProducts.filter(
        (item) => item.free_shipping === shipping
      );
    }
    if (search !== '') {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }
    if (price !== 'all') {
      newProducts = newProducts.filter((item) => {
        if (price === 0) {
          return item.price < 300;
        } else if (price === 300) {
          return item.price > 300 && item.price < 650;
        } else {
          return item.price > 650;
        }
      });
    }
    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const setToMedieval = () => {
    setFilters({ ...filters, category: 'men"s', specific: 'all' });
  };

  const setToAncient = () => {
    setFilters({ ...filters, category: 'women"s', specific: 'all' });
  };

  const setToGolden = () => {
    setFilters({ ...filters, category: 'all', specific: 'socks' });
  };

  const setSneakers = () => {
    setFilters({ ...filters, specific: 'sneakers', specific: 'all' });
  };

  const setToAll = () => {
    setFilters({ ...filters, category: 'all', specific: 'all' });
  };

  const changePage = (index) => {
    setPage(index);
  };
  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === 'checkbox') {
      filterValue = e.target.checked;
    } else if (type === 'radio') {
      value === 'all' ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        medieval,
        page,
        filters,

        changePage,
        updateFilters,
        setToMedieval,
        setToGolden,
        setToAncient,

        setSneakers,
        setToAll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
