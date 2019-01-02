import React from 'react';

const AdminProductsTable = props => {
    return ( 
    <div>
        <table className="table">
         <thead>
             <th>Product</th>
             <th colSpan="2">Price</th>
         </thead>
            <tbody>
            {
                    props.products.map( (product, i) => {
                        return (
                            <tr key={product.id} >
                                <td onClick={ () => { props.handleClickFunc(product.id); } }>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button className="btn btn-danger" onClick={ () => { props.removeProductFunc(product.id)} }>REMOVE</button></td>
                            </tr>
                        );
                    })
            }
            </tbody>
        </table>
    </div>
    )

};

export default AdminProductsTable;