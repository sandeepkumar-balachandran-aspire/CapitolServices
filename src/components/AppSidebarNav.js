import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { CBadge, CNavLink, CSidebarNav } from '@coreui/react';

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    // Debugging logs to check badge values
    console.log('navLink badge:', badge);

    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && badge.text && badge.color && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component: Component, name, badge, icon, ...rest } = item;

    // Debugging logs to check item and badge values
    console.log('navItem:', item);

    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink {...(rest.to && { as: NavLink })} {...rest}>
            {navLink(name, icon, badge, indent)} 
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent) 
        )}
      </Component>
    );
  };

  const navGroup = (item, index, badge) => {
    const { component: Component, name, icon, items, ...rest } = item;

    // Debugging logs to check group items
    console.log('navGroup:', item);

    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon, badge)} {...rest}>
        {items && items.map((childItem, childIndex) =>
          childItem.items ? navGroup(childItem, childIndex, badge) : navItem(childItem, childIndex, true),
        )}
      </Component>
    );
  };

  return (
    <CSidebarNav as={SimpleBar}>
      {items && items.map((item, index) => (item.items ? navGroup(item, index, item.badge) : navItem(item, index, false)))}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.elementType.isRequired,
    name: PropTypes.string,
    badge: PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
    icon: PropTypes.element,
    items: PropTypes.array,
    to: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};
