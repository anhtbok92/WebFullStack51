import React from 'react';
import { connect } from "react-redux";
import { getNews } from "../actions";

class ButtonComponent extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }} >
                <button onClick={this.props.getNews}>Get news from NewsApi.com</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getNews: getNews,
};

export default connect(null, mapDispatchToProps)(ButtonComponent);