import HeroSection from "./HeroSection"
import ContentsComponent from "./ContentsComponent"
import {useArticles} from "./ArticleProvider"

const HomeComponent = () => {
    const {articles} = useArticles()

    return(
        <>
            <HeroSection/>
            <ContentsComponent articles={articles}/> 
        </>
    )
}

export default HomeComponent