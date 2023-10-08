import { HiUserGroup,HiUsers } from 'react-icons/hi'
import { IoHomeSharp } from 'react-icons/io'
import { BsThreeDots,BsFillBarChartLineFill,BsFillBellFill,BsBoxArrowLeft,BsBoxArrowRight } from 'react-icons/bs'
import { RiArrowLeftRightFill,RiMoneyDollarCircleLine } from 'react-icons/ri'
import { ImFileText } from 'react-icons/im'
import { BiRadioCircle } from 'react-icons/bi'
import { SiFacebookgaming } from 'react-icons/si'
import { MdEditNote ,MdDelete,MdNewLabel } from 'react-icons/md'
import { TiFilter } from 'react-icons/ti'
import { FcOk,FcCancel } from 'react-icons/fc'
import { GrFormSearch } from 'react-icons/gr'

export const activeData = [
    {
        id:1,
        number:10,
        cases:"New Exchanges",
        iconMain:"",
        iconSmall:MdNewLabel
    },
    {
        id:2,
        number:25,
        cases:"Active Exchanges",
        iconMain:FcFactory,
        iconSmall:FcOk
    },
    {
        id:3,
        number:10,
        cases:"Canceled Exchanges",
        iconMain:FcFactory,
        iconSmall:FcCancel
    },
    {
        id:4,
        number:10,
        cases:"Closed Exchanges",
        iconMain:FcFactory,
        iconSmall:""
    },
]
 export const sidebarData = [
    {
        id:1,
        link:"/exchange",
        title:"Exchange",
        icon:SiFacebookgaming
    },
    {
        id:2,
        link:"/transfers",
        title:"Transfers",
        icon:RiArrowLeftRightFill
    },
    {
        id:3,
        link:"/clients",
        title:"Clients",
        icon:HiUserGroup
    },
    {
        id:4,
        link:"/",
        title:"Home",
        icon:IoHomeSharp
    },
    {
        id:5,
        link:"/currencies",
        title:"Currencies",
        icon:RiMoneyDollarCircleLine
    },
    {
        id:6,
        link:"/",
        title:"Notes",
        icon:ImFileText
    },
    {
        id:7,
        link:"/charts",
        title:"Charts",
        icon:BsFillBarChartLineFill
    },
    {
        id:1,
        link:"/users",
        title:"Users",
        icon:HiUsers
    },
 ]