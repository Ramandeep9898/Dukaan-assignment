import "./product.css";
import privacy from "../../assets/images/privacy.png";
import productData from "./productData.json";

export const Product = () => {
  return (
    <div className="product-conatiner">
      <div className="product-wrapper">
        <div className="heading mb-48">Try our other free products</div>

        <div className="flex gap-32 wrap">
          {productData.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <div className="product-image mb-16">
                  <img src={privacy} alt="privacy" />
                </div>
                <div className="product-card-heading mb-4">
                  {product.productName}
                </div>
                <div className="product-card-abt">{product.productAbt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
