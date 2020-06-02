import React, { Component } from "react";

import Wrapper from '../wrapper';
import SearchContent from './search-content';

import {
  withRouter
} from 'react-router-dom'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = { search: ""}

    this.handleChange = this.handleChange.bind(this)
    this.showData = this.showData.bind(this)
  }

  showData() {
    const search = this.state.search
    if(search !== "") {
      if(!isNaN(this.state.search)){
        this.props.history.push(`/block/${search}`);
      } else if(search.length > 40){
        this.props.history.push(`/tx/${search}`);
      } else {
        this.props.history.push(`/account/${search}`);
      }
    }
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({search: value})
  }

  render () {
    return (
      <SearchContent className="search">
          <Wrapper>
            <form>
              <input type="text" name="block" placeholder="Search by Transaction Hash, Block #" onChange={this.handleChange} />
              <input type="button" value="Search" onClick={() => {this.showData()}}/>
            </form>
          </Wrapper>
      </SearchContent>
    );
  }
}

export default withRouter(Search)