import React, { useState } from "react";
import { List, Item } from "./styles";

function NavList({ list, ...rest }) {
  const [active, set] = useState(null);
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
          {item.title}
        </Item>
      ))}
    </List>
  );
}

export default NavList;
