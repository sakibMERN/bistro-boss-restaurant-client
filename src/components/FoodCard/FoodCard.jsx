
const FoodCard = ({item}) => {
    const { image, price, recipe, name } = item;

  return (
    <div className="card card-compact bg-base-100 max-w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-2 top-2 bg-slate-900 text-gray-300 rounded-3xl p-1 text-sm font-medium">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-warning bg-slate-100 btn-outline border-0 border-b-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
