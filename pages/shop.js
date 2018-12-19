import Header from '../components/Header';
import Head from 'next/head';
import ProductsTable from '../components/ProductsTable';

import fetch from 'isomorphic-unfetch'

const apiUrl = 'http://127.0.0.1:4000';

export default class Shop extends React.Component {

    constructor(){
        super();
    }

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
            "count": this.props.myData.length,
            "inputValue": ""
        });
    }

    async addProduct(){
      
        let data = this.state.products
        let newProduct = {
            "name": this.state.inputValue,
            "price": 300
        }

        data.push(newProduct)
        this.setState({
            "products": data,
            "count": this.state.products.length+1
        });

        //Update database
        let id = await fetch(apiUrl + '/products', {
            method: 'POST',
            body: JSON.stringify( { product: newProduct} ),
            headers: { "Content-Type": "application/json" }
        });
        console.log(id)
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

        fetch(apiUrl + '/products', {
            method: 'DELETE',
            body: JSON.stringify( { productId: id } ),
            headers: { "Content-Type": "application/json" }
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