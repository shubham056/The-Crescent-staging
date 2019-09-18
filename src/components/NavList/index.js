import React, { useState } from "react";
import { List, Item } from "./styles";
import { Link } from "gatsby";

function NavList({ list, ...rest}) {
  const [active, set] = useState("2017");
  
  // console.log(active)
  list=[
    { id: 1, title: "2017", to: "news-2017" },
    { id: 2, title: "2016", to: "news-2016" },
    { id: 3, title: "2015", to: "news-2015" },
    { id: 4, title: "2014", to: "news-2014" },
    { id: 5, title: "2013", to: "news-2013" },
    { id: 6, title: "2012", to: "news-2012" },
    { id: 7, title: "2011", to: "news-2011" },
    { id: 8, title: "2010", to: "news-2010" },
  ]
  // console.log(list)
  return (
    <List as="ul" {...rest}>
      {list.map(item => (
        <Item
          mb={3}
          active={item.title === active ? true : false}
          onClick={() => set(item.title)}
          as="li"
          key={item.id}
         
        >
         <Link to={item.to} activeClassName="active">{item.title}</Link> 
         {/* {item.title} */}
        </Item>
      ))}
    </List>
  );
}

export default NavList;
