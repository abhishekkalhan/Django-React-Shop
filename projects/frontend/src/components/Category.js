import React, { Component } from 'react';

class Category extends Component {
  state = {
    shop: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('/api/shop/category/');
      const shop = await res.json();
      this.setState({
        shop
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.shop.map(({name, description, image}) => (
          <div key={name}>
            <div className="row my_row_class">
              <div className="mx-auto">
                <p><a href="#">Our product Collection</a> | {name}</p>
              </div>
            </div>
            <div>
              <img className={"my_image"} className={"mx-auto"}  src={image} alt={name} />
            </div>
            <br />
            <div>
              <h1 className="text-center my_title">{name}</h1>
              <p className="text-justify">{description}</p>
            </div>
          </div>
          ))}
      </div>
    );
  }
}

export default Category;


