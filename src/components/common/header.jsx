import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { DataContext } from '../productData';

const { Link } = Anchor;

function MyHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-horse-saddle"></i>
          <a href="http://google.com">FarasiMart</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#horseSale" title="Horse For Sale" />
            <Link href="#services" title="Services" />
            <Link href="#marketPlace" title="Market Place" />
            <Link href="#about" title="About" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#horseSale" title="Horse For Sale" />
              <Link href="#services" title="Services" />
              <Link href="#marketPlace" title="Market Place" />
              <Link href="#about" title="About" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;