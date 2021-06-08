import React from "react"
import { Icon } from "@iconify/react"
import tvIcon from '@iconify/icons-entypo/tv';
import bxsCalendar from '@iconify/icons-bx/bxs-calendar';
import lifeRing from '@iconify/icons-fa-solid/life-ring';
import diceD20 from '@iconify/icons-fa-solid/dice-d20';
import outlineSportsSoccer from '@iconify/icons-ic/outline-sports-soccer';
import starFilled from '@iconify/icons-ant-design/star-filled';
import chatAlt from '@iconify/icons-heroicons-outline/chat-alt';
import helpBuoySharp from '@iconify/icons-ion/help-buoy-sharp';
import aboutIcon from '@iconify/icons-flat-color-icons/about';
import newspaperIcon from '@iconify/icons-bi/newspaper';
import uservoiceIcon from '@iconify/icons-logos/uservoice';

const sportsconfig = [
  {
    id: "Sports",
    title: "Sports",
    type: "item",
    icon: <Icon icon={outlineSportsSoccer} width="22" height="22" />,
    navLink: "/sports",
  },
  {
    id: "Inplay",
    title: "Inplay",
    type: "item",
    icon: <Icon icon={tvIcon} width="20" height="20" />,
    navLink: "/Inplay",
  },
  {
    id: "Upcoming",
    title: "Upcoming",
    type: "item",
    icon: <Icon icon={bxsCalendar} width="20" height="20" />,
    navLink: "/Upcoming",
  },
  {
    type: "line",
  },
  {
    id: "Casino",
    title: "Casino",
    type: "item",
    icon: <Icon icon={lifeRing} width="20" height="20" />,
    navLink: "/casino",
  },
  {
    id: "Live Casino",
    title: "Live Casino",
    type: "item",
    icon: <Icon icon={diceD20} width="20" height="20" />,
    navLink: "/live-casino",
  },
  {
    type: "line",
  },
  {
    id: "Clubhouse",
    title: "Clubhouse",
    type: "item",
    icon: <Icon icon={starFilled} width="20" height="20" />,
    navLink: "/Clubhouse",
  },
  {
    type: "line",
  },
  {
    id: "Horse racing",
    title: "Horse racing",
    type: "item",
    icon: <Icon icon={starFilled} width="20" height="20" />,
    navLink: "/Horse-racing",
  },
  {
    id: "Virtual sports",
    title: "Virtual sports",
    type: "item",
    icon: <Icon icon={starFilled} width="20" height="20" />,
    navLink: "/Virtual-sports",
  },
  {
    id: "Sports Guru",
    title: "Sports Guru",
    type: "item",
    icon: <Icon icon={starFilled} width="20" height="20" />,
    navLink: "/Sports-Guru",
  },
  {
    type: "line",
  },
  {
    id: "Live Chat",
    title: "Live Chat",
    type: "item",
    icon: <Icon icon={chatAlt} width="20" height="20" />,
    navLink: "/Live-Chat",
  },
  {
    id: "Help centre",
    title: "Help centre",
    type: "item",
    icon: <Icon icon={helpBuoySharp} width="20" height="20" />,
    navLink: "/Help-centre",
  },
  {
    id: "Promotions",
    title: "Promotions",
    type: "item",
    icon: <Icon icon={uservoiceIcon} width="20" height="20" />,
    navLink: "/Promotions",
  },
  {
    id: "About",
    title: "About",
    type: "item",
    icon: <Icon icon={aboutIcon} width="20" height="20" />,
    navLink: "/About",
  },
  {
    id: "News",
    title: "News",
    type: "item",
    icon: <Icon icon={newspaperIcon} width="20" height="20" />,
    navLink: "/News",
  },
  
]

export default sportsconfig
