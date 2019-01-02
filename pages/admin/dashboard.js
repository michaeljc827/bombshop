import { Component } from 'react'
import AdminProductsTable from '../../components/AdminProductsTable';
import Router from 'next/router'

import fetch from 'isomorphic-unfetch'

import * as config from '../../static/config';
const apiUrl = config.url;

export default class Dashboard extends React.Component {

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

    async addProduct(){
      
        let data = this.state.products
        let newProduct = {
            "name": this.state.inputValue,
            "price": 300
        }

        //Update database
        let response = await fetch(apiUrl + '/products', {
            method: 'POST',
            body: JSON.stringify( { product: newProduct} ),
            headers: { "Content-Type": "application/json" }
        });
        //Get the ID of newly created products row
        let responseData = await response.json()
        //Set the ID for newProduct Object
        newProduct['id'] = responseData
        //Push the new product into the front-end table
        data.push(newProduct)
        this.setState({
            "inputValue": '',
            "products": data,
            "count": this.state.products.length+1
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

        fetch(apiUrl + '/products', {
            method: 'DELETE',
            body: JSON.stringify( { productId: id } ),
            headers: { "Content-Type": "application/json" }
        });
    }

    handleClick(id){
        Router.push('/admin/product/'+id);
    }

    render() {
        return (
        <div className="container section">
            <div className="col-sm-12">
                <h1>Dashboard</h1>
            </div>
            <div className="col-sm-12">
                <h2>Manage Products</h2>
                <div style={{margin:"10px 0"}}> 
                        <input type="text" placeholder="Item Name" onChange={ evt => { this.updateInput(evt) }} value={this.state.inputValue}/>
                        <button type="button" onClick={() => { this.addProduct() } }>Add Item</button>
                </div>
            <AdminProductsTable products={this.state.products} handleClickFunc={ (id) => this.handleClick(id)} removeProductFunc={ (id) => this.removeProduct(id) }/>
            </div>
        </div>  
        );
    }
}