import Header from '../components/staticComponents/Header.tsx';
import '../components/styles/general.css';
import '../components/styles/footer.css';
import Head from "../components/staticComponents/Head.tsx";
import {useState} from "react";
import Main from "../components/homeComponents/Main.tsx";
import BrandPage from "./BrandPage.tsx";
import ClothingPage from "./ClothingPage.tsx";
import AboutPage from "./AboutPage.tsx";
import FootwearMain from "../components/footwearComponents/FootwearMain.tsx";

function FootwearPage() {
    const [currentSection, setCurrentSection] = useState('');

    const navigatePage = (section: string) => {
        setCurrentSection(section);
    };

    let content;
    switch (currentSection) {
        case 'trending':
            content = <Main/>;
            break;
        case 'brands':
            content = <BrandPage />;
            break;
        case 'footwear':
            content = <FootwearPage />;
            break;
        case 'clothing':
            content = <ClothingPage />;
            break;
        case 'about':
            content = <AboutPage />;
            break;
        default:
            content = <FootwearMain/>;
    }

    return (
        <>
            <html lang="en">
            <Head/>
            <body>
            <Header onSectionChange={navigatePage}/>
            <main className="main">
                {content}
            </main>
            </body>
            </html>
        </>
    )
}

export default FootwearPage;