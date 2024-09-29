import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.imageUrl} />
          <p>${item.unitPrice}</p>
          <p>
            {item.ingredients.map((ingredient, i) =>
              item.ingredients.length - 1 > i ? `${ingredient}, ` : ingredient
            )}
          </p>
          {item.soldOut && <p>SOLD OUT</p>}
        </div>
      ))}
    </>
  );
}

//fetch the data and then return it
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
