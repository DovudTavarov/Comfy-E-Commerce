import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "./PageHero";
import SingleProduct from "./SingleProduct";
import { useMyCustomContextApi } from "../hooks/custom";

function Products() {
  const { pathname } = useLocation();
  const { products } = useMyCustomContextApi();
  const [priceInputVal, setPriceInputVal] = useState(500);
  const [searchVal, setSearchVal] = useState("");
  const [companyName, setCompanyName] = useState("all");

  const companies = [
    "all",
    ...new Set(products.map((product) => product.fields.company)),
  ];

  const handlePriceChange = (e) => setPriceInputVal(+e.target.value);
  const changeCompanyProducts = (name) => setCompanyName(name);
  const handleProductSearch = (e) => setSearchVal(e.target.value);

  const filteredProducts = products.filter((product) => {
    const { name, price, company } = product.fields;

    const matchesSearch =
      searchVal === "" || name.toLowerCase().includes(searchVal.toLowerCase());
    const matchesCompany = companyName === "all" || company === companyName;
    const matchesPrice = price / 10 <= priceInputVal;

    return matchesSearch && matchesCompany && matchesPrice;
  });

  return (
    <>
      <PageHero path={pathname} />
      <section className="products">
        {/* Filters */}
        <div className="filters">
          <div className="filters-container">
            {/* Search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal("")}
                  className="fa fa-times clear-search"
                ></i>
              )}
            </form>

            {/* Company Filter */}
            <h4>Company</h4>
            <article className="companies">
              {companies.map((company) => (
                <button
                  key={company}
                  className={`company-btn ${
                    companyName === company ? "active" : ""
                  }`}
                  onClick={() => changeCompanyProducts(company)}
                >
                  {company}
                </button>
              ))}
            </article>

            {/* Price Filter */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                max="1000"
                min="0"
                value={priceInputVal}
                onChange={handlePriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceInputVal}</p>
          </div>
        </div>

        {/* Products */}
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))
          ) : (
            <h3 className="filter-error">
              Sorry, no products matched your search.
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
