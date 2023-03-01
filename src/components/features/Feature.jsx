import "./feature.css";
import select from "../../assets/images/select.png";
import feature from "./featureData.json";

export const Feature = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-wrapper">
          {feature.map((feature) => {
            return (
              <div key={feature.id} className="feature">
                <div className="feature-logo mb-32">
                  <img src={select} alt="" />
                </div>
                <div className="feature-heading mb-8">
                  {feature.featureName}
                </div>
                <div className="feature-subheading">{feature.featureAbt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
