import { Link } from "react-router-dom";



export default function HeaderSecondCategory() {

  const categoryData = [
    {id:1, name: "Brand", url: "#"},
    {id:2, name: "Bikes", url: "#"},
    {id:3, name: "Components", url: "#"},
    {id:4, name: "Maintenance", url: "#"},
    {id:5, name: "Accessories", url: "#"},
    {id:6, name: "Gift cards", url: "#"},
  ];

  return (
    <div className="flex items-center gap-2">
      {
        categoryData.map(el => 
        <Link to={el.url} key={el.id} className="px-3 py-1 text-base text-black@ hover-header-btn">
          {el.name}
        </Link>)
      }
    </div>
  );
}
