function PageHero({ path }) {
  let pathName;

  switch (path) {
    case "/products":
      pathName = "Products";
      document.title = "Products | Comfy";
      break;
    case "/about":
      pathName = "About";
      document.title = "About | Comfy";
      break;
    default:
      pathName = path;
      document.title = "Product Info | Comfy";
      break;
  }

  return (
    <section className="page-hero">
      <div className="section-center">
        <h3 className="page-hero-title">Home / {pathName}</h3>
      </div>
    </section>
  );
}

export default PageHero;
