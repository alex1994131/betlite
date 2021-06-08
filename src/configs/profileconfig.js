import React from "react"
import * as Icon from "react-feather"
const profileconfig = [
  {
    id: "My Wallet",
    title: "My Wallet",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    navLink: "/mywallet/deposit",
    children: [
      {
        id: "Deposit",
        title: "Deposit",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/mywallet/deposit"
      },
      {
        id: "Withdraw",
        title: "Withdraw",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/mywallet/withdraw"
      },
      // {
      //   id: "Balance History",
      //   title: "Balance History",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/mywallet/balance-history"
      // },
    ]
  },
  {
    id: "My Profile",
    title: "My Profile",
    type: "collapse",
    navLink: "/myprofile/profile-info",

    icon: <Icon.User size={20} />,
    badge: "warning",
    children: [
      {
        id: "Profileinformation",
        title: "Profile Information",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/myprofile/profile-info"
      },
      {
        id: "Changepassword",
        title: "Change Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/myprofile/change-password"
      },
      // {
      //   id: "Security",
      //   title: "Security",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/myprofile/security"
      // },
      // {
      //   id: "Newsletter",
      //   title: "News letter",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/myprofile/news-letter"
      // },
    ]
  },
  {
    id: "My Bets",
    title: "My Bets",
    navLink: "/Mybets/casinos",

    type: "collapse",
    icon: <Icon.CheckCircle size={20} />,
    children: [
      // {
      //   id: "Sportsbets",
      //   title: "SportsBook",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/Mybets/sports"
      // },
      {
        id: "Casinogames",
        title: "MY Bets",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/Mybets/casinos"
      },
    ]
  },
  
  {
    id: "Bonuses",
    title: "Bonuses",
    type: "collapse",
    icon: <Icon.Gift size={20} />,
    badge: "warning",
    navLink: "/Bonuses/casinos",
    children: [
      // {
      //   id: "Bonuses Sports",
      //   title: "SportsBook",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/Bonuses/sports"
      // },
      {
        id: "Bonuses Casinos",
        title: "Casinos",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/Bonuses/casinos"
      },
    ]
  },
  // {
  //   id: "Messages",
  //   title: "Messages",
  //   type: "item",
  //   icon: <Icon.Shield size={20} />,
  //   navLink: "/Messages/messages"
  // },
]

export default profileconfig
