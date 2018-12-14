import Header from '../components/Header';
import Head from 'next/head';
import ProductsTable from '../components/ProductsTable';

import MockData from '../static/mock-data.json';


export default class Shop extends React.Component {

    componentWillMount(){
        this.setState({
            "products": MockData,
            "count": MockData.length,
            "inputValue": ""
        })
    }

    addProduct(){
        let data = this.state.products
        data.push({
            "id": this.state.products.length+1,
            "name": this.state.inputValue,
            "price": 300
        })

        this.setState({
            "products": data,
            "count": this.state.products.length+1
        });
    }

    updateInput(evt){
        let data = this.state.products
        this.setState({
            "products": data,
            "inputValue": evt.target.value
        });
    }


    render() {
        console.log("Rendering shop with", this.state.products)
        return (
        <div>
            <div className="section container">
                <h2>Products in Stock</h2>
                <div style={{margin:"10px 0"}}> 
                    <input type="text" placeholder="Item Name" onChange={ evt => { this.updateInput(evt) }}/>
                    <button type="button" onClick={() => { this.addProduct() } }>Add Item</button>
                </div>
                <ProductsTable products={this.state.products}/>
            </div>

        </div>
        )
    }

}
