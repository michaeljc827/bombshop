import Header from '../components/Header';
import Head from 'next/head';
import ProductsTable from '../components/ProductsTable';

import fetch from 'isomorphic-unfetch'

export default class Shop extends React.Component {

    constructor(){
        super();
    }

    static async getInitialProps() {
        const result = await fetch("http://wheresthehorse.com:4000/products")
        const data = await result.json()
        let newProduct = {
            name: "Test Bomb A",
            price: 100
        };
        fetch('http://wheresthehorse.com:4000/products', {
           method: 'POST',
           body: JSON.stringify( { product: newProduct} ),
           headers: { "Content-Type": "application/json" }
        });

        return {
            myData: data
        }
    }

    componentWillMount(){
        this.setState({
            "products": this.props.myData,
            "count": this.props.myData.length,
            "inputValue": ""
        });
    }

    addProduct(){
        let data = this.state.products
        let newProduct = {
            "id": this.state.products.length+1,
            "name": this.state.inputValue,
            "price": 300
        }
        data.push(newProduct)
        this.setState({
            "products": data,
            "count": this.state.products.length+1
        });

        //Update database
        fetch('http://wheresthehorse.com:4000/products', {
           method: 'POST',
           body: JSON.stringify( { product: newProduct} ),
           headers: { "Content-Type": "application/json" }
        });

    }

    updateInput(evt){

        let data = this.state.products;
        this.setState({
            "products": data,
            "inputValue": evt.target.value
        });
    }

    removeProduct(id){
        let data = this.state.products
        data = data.filter( (a) => {
            return a.id != id;
        });
        this.setState( {
            "products" : data
        });
    }


    render() {
        return (
        <div>
            <div className="section container">
                <h2>Products in Stock</h2>
                <div style={{margin:"10px 0"}}> 
                    <input type="text" placeholder="Item Name" onChange={ evt => { this.updateInput(evt) }}/>
                    <button type="button" onClick={() => { this.addProduct() } }>Add Item</button>
                </div>
                <ProductsTable products={this.state.products} removeProductFunc={ (id) => this.removeProduct(id) } />
            </div>

        </div>
        )
    }

}
``