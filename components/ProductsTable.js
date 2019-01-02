import React from 'react';
import Router from 'next/router'

const ProductsTable = props => {
    return ( 
    <div>
        <table className="table">
            <tbody>
                <tr><th>Product Description</th><th>Price</th></tr>
            {
                props.products.map( (product, i) => {
                    return (
                        <ProductsTableRow product={product} key={product.id}/>
                    );
                })
            }
            </tbody>
        </table>
    </div>
    )
};

const ProductsTableRow = props => {
    return (
        <tr onClick={ () => { Router.push('/product/' + props.product.id) } }>
            <td>ID: {props.product.id} - {props.product.name}</td>
            <td>{props.product.price} Rupees</td>
        </tr>
    );
};


export default ProductsTable;