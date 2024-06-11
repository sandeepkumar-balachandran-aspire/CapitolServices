import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Apps',
  },
  {
    component: CNavGroup,
    name: 'Orders@',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      text : "2",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'New',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/open',
      },
      {
        component: CNavItem,
        name: 'Group',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Assigned',
        to: '/base/cards',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'IT Help',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    badge: {
      text : "7",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Queue',
        to: '/base/jumbotrons',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'RASAccount',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    badge: {
      text : "4",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/navbars',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Queue',
        to: '/base/paginations',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'SWAT',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    badge: {
      text : "6",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Queue',
        to: '/base/cards',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'DelawareCrop',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    badge: {
      text : "9",
      color: "warning"
    },
    items: [
        {
          component: CNavItem,
          name: 'Open',
          to: '/base/accordion',
        },
        {
          component: CNavItem,
          name: 'Search',
          to: '/base/breadcrumbs',
        },
        {
          component: CNavItem,
          name: 'Queue',
          to: '/base/cards',
        }
      ],
  },
]

export default _nav
