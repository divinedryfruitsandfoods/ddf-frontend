import React from "react";

function ProductDetail() {
  return (
    <section className="h-full container mx-auto gradient-form bg-gray-200 mt-16">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img class="h-48 w-full object-cover md:h-full md:w-48" alt="Almonds" src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" />
          <div>Product Images</div>
        </div>
        <div>Product Description</div>
      </div>
    </section>
  );
}

export default ProductDetail;
