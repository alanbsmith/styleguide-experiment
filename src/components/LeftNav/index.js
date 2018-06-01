import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class SubMenu extends Component {
  state = {
    showSubMenu: false,
  };

  render() {
    const { showSubMenu } = this.state;
    const { name, link, items } = this.props;
    return (
      <Li>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={link} style={{ flex: 1 }}>{name}</Link>
          {items && <button onClick={() => this.setState({ showSubMenu: !showSubMenu })}> { showSubMenu ? '-' : '+' } </button>}
        </div>
        {items && showSubMenu && <Menu menus={items} />}
      </Li>
    )
  }
}

class Menu extends Component {

  renderSubMenus() {

    return this.props.menus.map((menu, i) => (
      <SubMenu key={i} {...menu} />
    ))
  }

  render() {
    return (
      <Ul>
        {this.renderSubMenus()}
      </Ul>
    )
  }
}

function LeftNav({ menus }) {
  return (
    <LeftNavBlock>
      <Menu menus={menus} />
    </LeftNavBlock>
  )
}

export default LeftNav;

const Ul = styled.ul`
  list-style: none;
  margin: 4px 0 4px 4px;
  padding: 4px 0 4px 4px;
`;

const Li = styled.li`
  padding: 4px 0 4px 4px;
`;

const LeftNavBlock = styled.nav`
  background: ${props => props.theme.colors.chrome100};
  flex: 1;
  min-width: 240px;
  padding: 8px;
  overflow-y: scroll;
`
