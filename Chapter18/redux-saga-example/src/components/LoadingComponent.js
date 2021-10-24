import React from 'react';
import { connect } from 'react-redux'
import loadingSpinner from '../loading_spinner.gif';

class LoadingComponent extends React.Component {
    render() {
        const loading = this.props.loading;
        return (
            loading ? <div style={{ textAlign: 'center'}}>
                <img style={{ width: '10%' }} src={loadingSpinner} alt='loading' />
            </div> : null
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps, null)(LoadingComponent);