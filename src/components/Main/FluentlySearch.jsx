import DefaultTitle from "../UI/DefaultTitle";
import {v4 as uuid} from 'uuid';
const FluentlySearch = () => {
    const DataList = [
        {
            title: "Kem Chống Nắng",
            similarProduct: "210k+ Sản phẩm cùng loại",
            imgSrc: "./images/fluently_search/1.jpeg",
            href: "#",
        },
        {
            title: "Áo Cardigan",

            similarProduct: "196k+ Sản phẩm cùng loại",
            imgSrc: "./images/fluently_search/2.jpeg",
            href: "#",
        },
        {
            title: "Son Nội Địa Nhật",

            similarProduct: "12k+ Sản phẩm cùng loại",
            imgSrc: "./images/fluently_search/3.jpeg",
            href: "#",
        },
        {
            title: "Bomber",

            similarProduct: "81k+ Sản phẩm cùng loại",
            imgSrc: "./images/fluently_search/4.jpeg",
            href: "#",
        },
    ];
    return (
        <div className='fluently-search flex flex-col mb-1 p-2 px-3 overflow-hidden bg-white space-y-4 xl:mx-40'>
            <DefaultTitle
                titleMobile={"Tìm Kiếm Phổ Biến"}
                titleDesktop={"Xu hướng tìm kiếm"}
                viewMore={"#"}
                viewAll={"#"}
            />

            <div className='fluently-search-list grid grid-cols-2 md:grid-cols-4 justify-center'>
                {DataList.map((item) => (
                    <a key={uuid()} href={item.href} className='flex items-center pt-2 pb-2 pl-2 pr-1 border'>
                        <div className='w-1/2'>
                            <p className='truncate whitespace-nowrap text-black'>{item.title}</p>
                            <p className='text-gray-400 text-xs whitespace-nowrap truncate'>
                                {item.similarProduct}
                            </p>
                        </div>
                        <div className='flex items-center justify-center w-1/2'>
                            <img src={item.imgSrc} alt='' />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FluentlySearch;
