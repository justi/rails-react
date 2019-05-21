import React from "react"
import { connect } from "react-redux";
import axios from 'axios';

import loadItems from '../actions/actionCreators'

class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    getItems = () => {
        console.log('getThings() Action!');
        axios.get('v1/things')
            .then(response => {
                this.props.dispatch(loadItems(response.data));
            })
            .catch(error => console.log(error))
    };

    searchItems = (e) => {
        if (e.key === 'Enter' && !(this.getSearchTerms.value === ''))
            {
                axios.get('v1/things.json/' + this.getSearchTerms.value)
                    .then(response => {
                        this.props.dispatch(loadItems(response.data));
                    })
                    .catch(error => console.log(error))
            }
    };
    componentDidMount() {
        this.getItems();
    };
  render () {
    const thingsList = this.props.items.map((item) => {
      return <li>{item.name} {item.guid}</li>
    });

    return (
      <React.Fragment>
            Greeting: {this.props.greeting}
            <button className="getThingsBtn" onClick={() => this.getItems()}>getItems</button>
            <br/>
            <ul>{thingsList}</ul>
          <div className="inputContainer">
              <input className="searchInput" type="text" placeholder="Search" maxLength="50"
                     onKeyPress={this.searchItems} ref={(input)=>this.getSearchTerms = input} />
          </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};
export default connect(mapStateToProps)(HelloWorld);
