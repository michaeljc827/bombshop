import ProductsTable from '../../components/ProductsTable';

import fetch from 'isomorphic-unfetch'

import * as config from '../../static/config';
const apiUrl = config.url;

export default class Shop extends React.Component {

    static async getInitialProps() {
        const result = await fetch(apiUrl + "/products")
        const data = await result.json()
        return {
            myData: data
        }
    }

    componentWillMount(){
        this.setState({
            "products": this.props.myData,
        });
    }

    render() {
        return (
        <div>
            <div className="section container">
                <h2>Products in Stock</h2>
                <ProductsTable products={this.state.products}/>
            </div>
        </div>
        )
    }

}