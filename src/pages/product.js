import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProductGoldMain from '../components/Blog/ProductGoldMain';

class ProductPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ProductGoldMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default ProductPage;

