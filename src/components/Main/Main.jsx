import Catalog from "./Catalog";
import FavoriteCollection from "./FavoriteCollection";
import FlashSale from "./FlashSale";
import FluentlySearch from "./FluentlySearch";
import MainBanner from "./MainBanner";
import MainCatalog from "./MainCatalog";
import SecondLogo from "./SecondLogo";
import ShopeeLive from "./ShopeeLive";
import ShopeeMall from "./ShopeeMall";
import StackBanner from "./StackBanner";
import TodayRecommend from "./TodayRecommend";
import TopSearch from "./TopSearch";

const Main = () => {
    return (
        <>
            {/* Mobile */}
            <main className='md:hidden  flex flex-col gap-2 bg-gray-100 md:mt-7 '>
                <div className='flex flex-col relative z-10'>
                    <MainBanner />
                    <MainCatalog />
                    <StackBanner />
                </div>

                <FlashSale />
                <TopSearch />
                <ShopeeMall />
                <ShopeeLive />
                <FluentlySearch />
                <FavoriteCollection />
                <Catalog />
                <TodayRecommend />
            </main>

            {/* Desktop */}
            <main className='hidden md:flex flex-col space-y-4 bg-gray-200 mt-7  '>
                <div className='flex flex-col relative z-10'>
                    <MainBanner />
                    <MainCatalog />
                </div>
                <SecondLogo />
                <Catalog />
                <FlashSale />
                <StackBanner />
                <ShopeeMall />
                <FluentlySearch />
                <TopSearch />
                <TodayRecommend />
            </main>
        </>
    );
};

export default Main;
