import { Component } from "react";
import { connect } from 'react-redux';
import { actFetchProducts, AddCart } from "../actions";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actFetchProducts();
    }

    render() {
        const { products } = this.props.products;
        return (
            <div className='card-columns'>
                {products.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.image}  width={'200px'} height={'200px'} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.price}</p>
                            <a className="btn btn-primary" onClick={() => this.props.AddCart(product)}>Add Cart</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.shopProduct
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actFetchProducts: () => dispatch(actFetchProducts()),
        AddCart: () => dispatch(AddCart())
    }
}

// HOC
export default connect(mapStateToProps, mapDispatchToProps)(Product);