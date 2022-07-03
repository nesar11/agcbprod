import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import golds from '../../sample-data/blog-posts/golds.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';
import ProductGoldCard from '../Common/ProductGoldCard';


class ProductMain extends Component {

    render() {
               return (
            <main>

                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Gold" />
				{/* breadcrumb-end */}

                <section className="blog-2 pt-120 pb-115">
                    <div className="container">
                        <div className='row'>
                            {golds && golds.map((gold, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 mb-30">
                                <ProductGoldCard gold={gold} />
                            </div>
                            ))}
                        </div>
                        <PaginationSection />
                    </div>
                </section> 
        	</main>
        );
    }
}

export default ProductMain;