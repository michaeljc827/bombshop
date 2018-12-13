export default class ProductsTable extends React.Component {


    constructor(){
        super()
    }

    componentWillMount(){
        this.setState(
            {
                "products": this.props.products
            }
        )
    }

    removeProduct(id){
        let data = this.state.products;
        console.log("Filtering for "+id,data)
        data = data.filter( function( a, i){
            return a.id != id;
        });

        this.setState({
            "products": data
        });
    }

    render(){
        console.log("Rendering table with" , this.state.products)
        return (
            <div>
                <table className="table">
                    <tbody>
                    {
                        this.state.products.map( (product, i) => {
                            return (
                                <tr key={product.id} onClick={ () => { this.removeProduct(product.id) } }>
                                    <td>{product.name}</td>
                                </tr>
                            );
                        })
                    }
                 </tbody>
                </table>
            </div>
        );
    }

}