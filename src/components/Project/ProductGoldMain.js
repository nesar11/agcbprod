import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ProductTabTwo from '../Elements/Tab/ProductTabTwo';



class ProductGoldMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Products" />
				{/* breadcrumb-end */}

                {/* service-start */}
                <ProductTabTwo />
				{/* service-end */}

        	</main>
        );
    }
}

export default ProductGoldMain;