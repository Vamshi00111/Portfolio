import indovina from "../images/works/indovina.gif"
import gameLab from "../images/works/gameLab.gif"
import mudima from "../images/works/mudima.gif"
import g1 from "../images/works/game1.png"
import g2 from "../images/works/game2.png"
import g3 from "../images/works/game3.png"

import portfolio from "../images/works/portfolio.gif"
import freshthyme from "../images/works/freshthyme.png"
import ecommerce from "../images/works/ecommerce.png"

import blackhorse from "../images/works/BlackHorse.jpg"
import caffedellearti from "../images/works/CaffeDelleArti.png"
import sam from "../images/works/Sam.png" 
import lehibou from "../images/works/LeHibou.jpg"
import magnus from "../images/works/Magnus.png"
import friday from "../images/works/Friday.png"
import marvanza from "../images/works/Marvanza.png"

import choice from "../images/works/Choiches.png"
import leaf from "../images/works/Leaf.png"
import hands from "../images/works/Handshake.png"
import manMiddle from "../images/works/ManMiddle.png"
import manNowhere from "../images/works/ManNowhere.png"
import touch from "../images/works/Touch.png"
import fit from "../images/works/Fit.png"


const web = [
    {title:"Personal website", image: portfolio, description:"My portfolio website", stack: "React.js, Tailwind CSS, Vite", duration: 0.13, link: "https://github.com/Georgelafayen/Personal-website"},
    {title:"E-commerse Website(Chobani)",image: ecommerce, description:"An e-commerce website", stack: "Next.js, Material UI, SpringBoot", duration: 0.12, link: "https://www.chobani.com/"},
    {title:"E-commerse Website(FreshThyme)",image: freshthyme, description:"An e-commerce website", stack: "Next.js, Material UI, SpringBoot", duration: 0.12, link: "https://ww2.freshthyme.com/sm/planning/rsid/104/"},
    {title:"Twitter Clone website", image: freshthyme, description:"Site created for the company Tea s.r.l.", stack: "Wordpress, Elementor", duration: 0.1, link: "https://www.teacz.com/"},
]

const multimedia = [
    {title: "Mudima Games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: "Unity, C#", duration: 0.14},
    {title:"Game Labs", image: gameLab, description:"Interactive game for museum visitors made for Museo diocesano di Santa Severina", stack: "Unity, C#", duration: 0.15},
    {title:"Indovina il santo!", image: indovina, description:"Interactive game for museum visitors made for Museo diocesano di Lamezia Terme", stack: "Unity, C#", duration: 0.16},
]

const itchGames = [
    {title:"Can I sleep now?", image: g1, description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Unity, C#", duration: 0.17, link: "https://lafayenbros.itch.io/can-i-sleep-now"},
    {title:"Shaaade!", image: g2, description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Unity, C#", duration: 0.18, link: "https://lafayenbros.itch.io/shaaade"},
    {title:"Generatore di scuse", image: g3, description:"A cute excuse simulator for not going out with friends", stack: "Unity, C#", duration: 0.19, link: "https://lafayenbros.itch.io/generatore-di-scuse-per-non-uscire-con-gli-amici-la-sera"},
]

const design = [
    {title:"Logo designs", image: [blackhorse, caffedellearti, sam, lehibou, magnus, marvanza, friday], description:"Some logos made for bands, associations and businesses", stack: "Photoshop, Illustrator", duration: 0.2},
    {title:"Compositing", image: [hands, fit, leaf, choice, manMiddle, manNowhere, touch], description:"Some compositing work", stack: "Photoshop, Illustrator", duration: 0.21},
]


export default {multimedia, itchGames, web, design};