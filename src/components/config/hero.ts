import HeroCard from "../../../assets/hero-card.png"
import HeroChat from "../../../assets/hero-chat.png"
import HeroChecked from "../../../assets/hero-checked.png"
import HeroDb from "../../../assets/hero-db.png"
import HeroIncome from "../../../assets/hero-income.png"


import UpSplash  from "../../../assets/unsplash.png"
import Notion from "../../../assets/notion.png"
import Intercom from "../../../assets/intercom.png"
import Descript from "../../../assets/descript.png"
import Grammarly from "../../../assets/grammarly.png"


export  {default as HeroCenterBg} from "../../../assets/hero-center-bg.png";
export {default as HeaderHeroLeftBg} from "../../../assets/header-hero-left-bg.png";
export  {default as HeaderHeroRightBg} from "../../../assets/header-hero-right-bg.png";
export  {default as HeroImage} from "../../../assets/hero-image.png"
export  {default as HeroVector} from "../../../assets/hero-vector.png"


export const Logos = [
    { src: UpSplash, alt: "UpSplash Logo" },
    {src: Notion, alt: "Notion Logo" },
    {src: Intercom, alt: "Intercom Logo" },
    {src: Descript, alt: "Descript Logo" },
    {src: Grammarly, alt: "Grammarly Logo" },
];


export const FloatingImagesAndIcons = [
    {
        src: HeroChecked,
        alt: "Hero Absolute Image 2",
        className: "absolute top-40 left-0",
        width: 40,
        height: 40,
    },
    {
        src: HeroIncome,
        alt: "Hero Absolute Image 3",
        className: "absolute bottom-5 left-[-45px]",
        width: 138,
        height: 70,
    },
    {
        src: HeroDb,
        alt: "Hero DB Image",
        className: "absolute right-8 top-5",
        width: 40,
        height: 40,
    },
    {
        src: HeroCard,
        alt: "Hero Card Image",
        className: "absolute right-[-30px] bottom-5",
        width: 146,
        height: 188,
    },
     {
        src: HeroChat,
        alt: "Hero Absolute Image 1",
        className: "absolute bottom-[-25px] right-22",
        width: 40,
        height: 40,
    },
];
