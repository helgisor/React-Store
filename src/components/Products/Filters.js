import React from 'react';
import { ProductContext } from '../../context/products';

const Filters = () => {
  const {
    filters: { search, category, shipping, price, setSneakers, specific },
    updateFilters,
    sorted,
  } = React.useContext(ProductContext);
  return (
    <section className='filters-section'>
      <h2 className='searchTitle'>
        {' '}
        <input
          type='text'
          id='search'
          name='search'
          value={search}
          onChange={updateFilters}
          className='form-control'
          className='searchInput'
          placeholder='Search'
          data-aos='fade-out'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-once='true'
        />
      </h2>

      <form className='filters-form'>
        <div className='searchRow'>
          <div
            className='form-group'
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='1800'
            data-aos-once='true'
          >
            <label htmlFor='category' className='searchLabel'>
              category
            </label>
            <select
              name='category'
              id='category'
              className='form-control'
              value={category}
              onChange={updateFilters}
              className='form-control'
            >
              <option value='all'>All</option>
              <option value='men"s'>Men's</option>
              <option value='women"s'>Women's</option>
            </select>
          </div>

          <div
            className='form-group'
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='1500'
            data-aos-once='true'
          >
            <label htmlFor='specific' className='searchLabel'>
              Type
            </label>
            <select
              name='specific'
              id='specific'
              className='form-control'
              value={specific}
              onChange={updateFilters}
              className='form-control'
            >
              <option value='all'>All</option>
              <option value='sneakers'>Sneakers</option>
              <option value='formal'>Formal</option>
              <option value='boots'>Boots</option>
              <option value='socks'>Socks</option>
              <option value='accessories'>Accessories</option>
            </select>
          </div>
        </div>
        <div
          className='price-group'
          data-aos='fade-right'
          data-aos-delay='50'
          data-aos-duration='1800'
          data-aos-once='true'
        >
          <label className='searchLabel'>
            <input
              data-aos='fade-right'
              data-aos-delay='50'
              data-aos-duration='1800'
              data-aos-once='true'
              type='radio'
              name='price'
              value='all'
              checked={price === 'all'}
              onChange={updateFilters}
            ></input>
            all
          </label>
          <label className='searchLabel'>
            <input
              type='radio'
              name='price'
              value='0'
              checked={price === 0}
              onChange={updateFilters}
            ></input>
            $0 - $300
          </label>
          <label className='searchLabel'>
            <input
              type='radio'
              name='price'
              value='300'
              checked={price === 300}
              onChange={updateFilters}
            ></input>
            $300 - $650
          </label>
          <label className='searchLabel'>
            <input
              type='radio'
              name='price'
              value='650'
              checked={price === 650}
              onChange={updateFilters}
            ></input>
            Over $650
          </label>
        </div>

        <div className='searchShipping'>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={updateFilters}
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='1800'
            data-aos-once='true'
          />
          <label
            htmlFor='shipping'
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='1800'
            data-aos-once='true'
          >
            On Sale!
          </label>
        </div>
      </form>

      <h6 className='searchTotal'>total products : {sorted.flat().length}</h6>
      <hr />
    </section>
  );
};

export default Filters;
