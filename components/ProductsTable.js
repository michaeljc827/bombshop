import React from 'react';

const ProductsTable = props => {
    return ( 
    <div>
        <table className="table">
            <tbody>
            {
                    props.products.map( (product, i) => {
                        return (
                            <ProductsTableRow product={product}/>
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
        <tr key={props.product.id} onClick={ () => { if (props.editingMode) { props.removeProductFunc(props.product.id)} } }>
            <td>{props.product.name}</td>
        </tr>
    );
};


export default ProductsTable;