
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
        {title && <Cover menuImg={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="btn btn-warning btn-outline border-0 border-b-4">Order Now!</Link>

    </div>
  );
};

export default MenuCategory;
