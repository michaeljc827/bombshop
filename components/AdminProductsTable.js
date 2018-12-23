import React from 'react';

const AdminProductsTable = props => {
    return ( 
    <div>
        <table className="table">
            <tbody>
            {
                    props.products.map( (product, i) => {
                        return (
                            <tr key={product.id} onClick={ () => { props.removeProductFunc(product.id)} }>
                                <td>{product.name}</td>
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