import Header from '../../components/general/Header.tsx';
import '../../components/styles/customer/general.css';
import '../../components/styles/customer/footer.css';
import {useState} from "react";
import Main from "../../components/customer/homeComponents/Main.tsx";
import BrandPage from "./BrandPage.tsx";
import FootwearPage from "./FootwearPage.tsx";
import AboutMain from "../../components/aboutComponents/AboutMain.tsx";

function AboutPage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    let content;
    switch (currentSection) {
        case 'home':
            content = <Main/>;
            break;
        case 'brands':
            content = <BrandPage/>;
            break;
        case 'footwear':
            content = <FootwearPage/>;
            break;
        case 'about':
            content = <AboutPage/>;
            break;
        default:
            content = <AboutMain/>;
    }

    return (
        <>
            <Header onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
        </>
    )
}

export default AboutPage;
