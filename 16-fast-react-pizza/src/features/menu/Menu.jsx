import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //3.retrieve the data returned by the loader function for that "route"
  /*
  route(/menu)에 할당된 loader 함수(menuLoader)를 실행해서 데이터를 가지고 온다
  >>만일 /menu에 customerLoader가 할당되어 있으면 customerLoader를 실행함
  */
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

//1.create loader function: fetch the data and then return it
export async function loader() {
  //the details of getMenu() are already defined in apiRestaurant
  const menu = await getMenu();
  return menu;
}

export default Menu;
