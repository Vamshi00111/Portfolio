import portfolio from "../images/works/portfolio.gif"
import freshthyme from "../images/works/freshthyme.png"
import ecommerce from "../images/works/ecommerce.png"
import recommendationSystem from "../images/works/recommendationSystem.jpg"


const web = [
    {title:"Personal website", image: portfolio, description:"My portfolio website", stack: "React.js, Tailwind CSS, Vite", duration: 0.13, link: "https://github.com/Georgelafayen/Personal-website"},
    {title:"E-commerse Website(Chobani)",image: ecommerce, description:"An e-commerce website for client Chobani", stack: "Next.js, Material UI, SpringBoot", duration: 0.12, link: "https://www.chobani.com/"},
    {title:"E-commerse Website(FreshThyme)",image: freshthyme, description:"An e-commerce website for client Freshthyme", stack: "Next.js, Material UI, SpringBoot", duration: 0.12, link: "https://ww2.freshthyme.com/sm/planning/rsid/104/"},
    {title:"Product Reccomendation System", image: recommendationSystem, description:"Engineered a 90%-accurate recommendation engine, integrating RESTful APIs for seamless e-commerce personalization.", stack: "Pyhton, TensorFlow, Pandas, scikit-learn", duration: 0.1},
    {title:"Data Analysis and Predictive Modeling", image: recommendationSystem, description:"Enhanced JD.com's sales strategy by 30% through Python-based predictive modeling.", stack: "Pyhton, NumPy, Pandas, scikit-learn, Matplotlib", duration: 0.1},
    {title:"Twitter Clone website", image: freshthyme, description:"Site created for the company Tea s.r.l.", stack: "Wordpress, Elementor", duration: 0.1},
]

export default {web};