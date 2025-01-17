import { useState } from 'react';
import { CustomLink, Logo, Menu, MenuItem } from '@/components'
import { FiHeart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import style from './Header.module.css'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={style["header"]}>
      <div className={style["header-content"]}>
        <section className={style['first-section']}>
          <Logo path="/" />
        </section>

        <section className={style['second-section']}>
          <CustomLink path="/wishlist"><FiHeart fontSize={24} /><span>Wishlist</span></CustomLink>

          <span onClick={handleClick}><FaUserCircle fontSize={24} /></span>

          <Menu open={open} archorEl={anchorEl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Entrar</MenuItem>
            <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
            <MenuItem onClick={handleClose}>Endereços</MenuItem>
            <MenuItem onClick={handleClose}>Minha Netshoes</MenuItem>
          </Menu>
        </section>
      </div>
    </header>
  )
}
