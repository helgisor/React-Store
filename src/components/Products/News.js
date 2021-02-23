import React, { useEffect, fragment } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function News({ title, products }) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (

    <div id='shopify-section-home-collections'>
  
    </div>
  );
}
