import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useShop } from "../store/context";

const Shop = () => {
  const { products } = useShop();
  const [searchItem, setSearchItem] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <form className="d-flex p-5" role="search">
          <input
            className="form-control p-4"
            type="search"
            placeholder="Search here"
            aria-label="Search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>
        {filteredProducts.length === 0 ? (
          <p>No matching products found.</p>
        ) : (
          filteredProducts.map((val) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col" key={val.id}>
              <div className="card my-3">
                <img
                  src={val.image}
                  className="card-img-top m-auto"
                  alt="..."
                  style={{ width: "250px", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{val.title.slice(0, 20)}</h5>
                  <p className="card-text">
                    Description: {val.description.slice(0, 40)}
                  </p>
                  <p className="card-text">Price: ${val.price}</p>
                  <NavLink to={`/products/${val.id}`} className="btn btn-dark">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
