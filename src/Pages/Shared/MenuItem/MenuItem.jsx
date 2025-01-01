import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex items-center gap-5">
      <img style={{borderRadius: '0 200px 200px'}} src={image} alt="" className="w-[118px] h-[104px]" />
      <div className="flex justify-between items-center gap-5">
        <div>
          <h2 className="uppercase">{name}------------------</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
