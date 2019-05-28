import React from "react"
import {connect} from "react-redux";
import axios from 'axios';

import {loadPosts, toggleCheckbox} from '../actions'

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        this.props.dispatch(toggleCheckbox());
    }

    getPosts = () => {
        axios.get('v1/posts')
            .then(response => {
                this.props.dispatch(loadPosts(response.data));
            })
            .catch(error => console.log(error))
    };

    searchPosts = (e) => {
        if (e.key === 'Enter') {
            axios.get('v1/posts', {
                params: {
                    s: this.getSearchTerms.value,
                    b: this.props.searchBoth
                }
            }).then(response => {
                this.props.dispatch(loadPosts(response.data))
            }).catch(error => console.log(error))
        }
    };

    componentDidMount() {
        this.getPosts();
    };

    render() {
        const postsList = this.props.posts.map((post) => {
            return(
                <div className="row my-1" key={post.id}>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">
                                {post.title}
                            </div>
                            <div className="card-body">
                                <p className="card-text">{post.content}</p>
                                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className="row my-5">
                    <div className="col-3">
                        <div className="inputContainer">
                            <input className="searchInput" type="text" placeholder="Search" maxLength="50"
                                   onKeyPress={this.searchPosts} ref={(input) => this.getSearchTerms = input}/>
                        </div>
                    </div>
                    <div className="col-3">
                        <label>
                            Search both in title and content
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.props.searchBoth}
                                onChange={this.handleInputChange} />
                        </label>
                    </div>
                </div>
                {postsList.length ? postsList : <li>No results :(</li>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        searchBoth: state.posts.searchBoth
    }
};
export default connect(mapStateToProps)(Posts);
