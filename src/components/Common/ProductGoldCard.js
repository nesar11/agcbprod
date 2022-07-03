import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductGoldCard = ({ gold }) => {

  return (
        <div className="kblog">
            <div className="kblog-img">
                <Link href={gold.url}>
                    <img src={'/'+ gold.image} alt="blog image" className="img-fluid" />
                </Link>
            </div>
            <div className="kblog-text">
                <h5>{gold.name}</h5>
                <p>{gold.weight}</p>
                <div className="kblog-text-link btn">
                     <Link href={gold.url}><a>{gold.button} <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                </div>
            </div>
        </div>


  );
}

export default ProductGoldCard;