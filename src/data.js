import { HiUserGroup, HiUsers } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { RiArrowLeftRightFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { ImFileText } from "react-icons/im";
import { SiFacebookgaming } from "react-icons/si";
import { FcOk, FcCancel, FcFactory, FcPlus } from "react-icons/fc";
import { HiLockClosed } from "react-icons/hi";

export const exchangesData = [
  [
    {
      _id: "65245b3b80b7dcb64be74521",
      exchangeNumber: "1000",
      exchanger: "Chebesi Awah",
      openDate: "2023-10-10",
      closeDate: "2023-11-30",
      lastModifiedDate: "2023-10-29",
      accountBalance: "2365.562",
      status: "Active",
      __v: 0,
    },
    {
      _id: "65245f3a91638556c70b2293",
      exchangeNumber: "1000",
      exchanger: "Rashad Sing",
      openDate: "2023-05-10",
      closeDate: "2023-08-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "1365.562",
      status: "New",
      __v: 0,
    },
    {
      _id: "65245f7291638556c70b2295",
      exchangeNumber: "1000",
      exchanger: "Rakesh Haman",
      openDate: "2023-05-10",
      closeDate: "2023-09-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "365.562",
      status: "New",
      __v: 0,
    },
    {
      _id: "65245f8e91638556c70b2297",
      exchangeNumber: "1000",
      exchanger: "Mitrove Haman",
      openDate: "2023-05-10",
      closeDate: "2023-09-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "365.562",
      status: "New",
      __v: 0,
    },
    {
      _id: "65245fa791638556c70b2299",
      exchangeNumber: "1000",
      exchanger: "Gorge Simon",
      openDate: "2023-05-10",
      closeDate: "2023-09-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "365.562",
      status: "Active",
      __v: 0,
    },
    {
      _id: "65245fde91638556c70b229b",
      exchangeNumber: "1003",
      exchanger: "Sarah May",
      openDate: "2023-05-10",
      closeDate: "2023-09-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "365.562",
      status: "Active",
      __v: 0,
    },
    {
      _id: "65245ff591638556c70b229d",
      exchangeNumber: "1005",
      exchanger: "Joyce April",
      openDate: "2023-05-10",
      closeDate: "2023-09-30",
      lastModifiedDate: "2023-07-29",
      accountBalance: "365.562",
      status: "Active",
      __v: 0,
    },
  ],
];

export const activeData = [
  {
    id: 1,
    number: 10,
    transaction: "New Exchanges",
    iconMain: "",
    iconSmall: FcPlus,
    color: "rgb(59, 130, 246)",
  },
  {
    id: 2,
    number: 25,
    transaction: "Active Exchanges",
    iconMain: FcFactory,
    iconSmall: FcOk,
    color: "green",
  },
  {
    id: 3,
    number: 10,
    transaction: "Canceled Exchanges",
    iconMain: FcFactory,
    iconSmall: FcCancel,
    color: "red",
  },
  {
    id: 4,
    number: 10,
    transaction: "Closed Exchanges",
    iconMain: FcFactory,
    iconSmall: HiLockClosed,
    color: "gray",
  },
];
export const sidebarData = [
  {
    id: 1,
    link: "/",
    title: "Exchanges",
    icon: SiFacebookgaming,
  },
  {
    id: 2,
    link: "/transfers",
    title: "Transfers",
    icon: RiArrowLeftRightFill,
  },
  {
    id: 3,
    link: "/clients",
    title: "Clients",
    icon: HiUserGroup,
  },
  {
    id: 4,
    link: "/home",
    title: "Home",
    icon: IoHomeSharp,
  },
  {
    id: 5,
    link: "/currencies",
    title: "Currencies",
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 6,
    link: "/notes",
    title: "Notes",
    icon: ImFileText,
  },
  {
    id: 7,
    link: "/charts",
    title: "Charts",
    icon: BsFillBarChartLineFill,
  },
  {
    id: 8,
    link: "/users",
    title: "Users",
    icon: HiUsers,
  },
];
