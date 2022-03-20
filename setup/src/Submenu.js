import React, { useState, useRef, useEffect, useReducer } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()

  const [columns, setColumns] = useState('col-2');
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length == 3) {
      setColumns('col-3')
    }

    if (links.length == 4) {
      setColumns('col-4')
    }
  }, [location, links]);

  return <article className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link, index) => {
        const { label, icon, url } = link;
        return <a href={url}>
          {icon}
          {label}
        </a>
      })}
    </div>
  </article>
}

export default Submenu
