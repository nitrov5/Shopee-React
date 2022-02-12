import Catalog from "./Catalog";
import FlashSale from "./FlashSale";
import FluentlySearch from "./FluentlySearch";
import MainBanner from "./MainBanner";
import MainCatalog from "./MainCatalog";
import SecondLogo from "./SecondLogo";
import ShopeeMall from "./ShopeeMall";
import StackBanner from "./StackBanner";
import TopSearch from "./TopSearch";

const Main = () => {
    return (
        <main className='flex flex-col gap-2 md:gap-0 md:space-y-4 bg-gray-100 md:mt-7 w-full  '>
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
        </main>
    );
};

export default Main;
