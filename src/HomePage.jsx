import React from "react";
//import {myPaintings, watercolors, oils} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";


class Homepage extends React.PureComponent{

    constructor(props){
      super(props);
      this.state = {
        items: [],
        selectedCategory: "puder",
      };
    }



    componentDidMount(){
      console.log("mount");
      this.fetchItems();
    }

    fetchItems = () => {

      fetch("/api/items")
        .then(res => {
          console.log("res", res);
          return res.json();
        })
        .then(items => {
          console.log("items", items);
          this.setState({
            items
          });
        })
        .catch(err =>{
          console.log("err", err);
        });
    }

    handleDropdown(event){
      console.log(event.target.value);
      this.setState({
        selectedCategory: event.target.value
      });
    }

    getVisibleItems = () => {
      return this.state.items.filter( item => item.category === this.state.selectedCategory);
    };

    render(){
      console.log("App state", this.state);
      return (
        <>
          <Header/>
          <div className="glow"></div>
          <div className="category-wrapper">
            Select category:
            <select onChange={this.handleDropdown.bind(this)}>
              <option value="puder">puder</option>
              <option value="lusikad">lusikad</option>
              <option value="puuuuder">puuuuder</option>
              </select>
          </div>

          <ItemList items={this.getVisibleItems()} />
        </>
      );
    }
  }
  export default Homepage;
