import React from "react";

function Blend() {
   return (
      <div className="blend">
         <div className="blend__description">
            <h2 className="blend__description-title">Original Blend</h2>
            <p className="blend__description-sub">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quasi voluptatum maiores neque alias voluptas esse dolorem nemo sapiente. Quas qui voluptas est libero magni
               veritatis praesentium labore accusamus nobis?
            </p>
         </div>
         <div className="blend__cards">
            <div className="blend__cards-card">
               <img src="/images/blend-1.jpg" alt="" className="blend__cards-card-image" />
               <p className="blend__cards-card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellat enim officia quia beatae odio, nam quas vitae rem exercitationem</p>
            </div>
            <div className="blend__cards-card">
               <img src="/images/blend-2.jpg" alt="" className="blend__cards-card-image" />
               <p className="blend__cards-card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellat enim officia quia beatae odio, nam quas vitae rem exercitationem</p>
            </div>
         </div>
      </div>
   );
}

export default Blend;
