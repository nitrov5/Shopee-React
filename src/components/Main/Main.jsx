import Catalog from "./Catalog";
import FlashSale from "./FlashSale";
import MainBanner from "./MainBanner";
import MainCatalog from "./MainCatalog";
import SecondLogo from "./SecondLogo";
import ShopeeMall from "./ShopeeMall";
import StackBanner from "./StackBanner";

const Main = () => {
    return (
        <main className='flex flex-col gap-2 md:gap-0 md:space-y-4 bg-gray-100 lg:mt-7 w-full overflow-hidden '>
            <div className='flex flex-col'>
                <MainBanner />
                <MainCatalog />
            </div>

            <SecondLogo />
            <Catalog />
            <FlashSale />
            <StackBanner />
            <ShopeeMall />
        </main>
    );
};

export default Main;
