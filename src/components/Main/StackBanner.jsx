const StackBanner = () => {
  return (
      <div className='shopee-stack-banner hidden relative lg:flex flex-col h-24 py-2 bg-white xl:mx-40'>
          <img
              src='./images/stack_banner/1.png'
              useMap='#stack-banner'
              className='w-full h-full rounded-[19px]'
          />
          <map name='stack-banner'>
              <area
                  target='_self'
                  alt=''
                  title=''
                  href='https://shopee.vn/m/samsung-day'
                  coords='8,5,395,106'
                  shape='rect'
              />
              <area
                  target='_self'
                  alt=''
                  title=''
                  href='https://shopee.vn/m/khung-gio-san-sale'
                  coords='407,6,792,104'
                  shape='rect'
              />
              <area
                  target='_self'
                  alt=''
                  title=''
                  href='https://shopee.vn/m/mum-club'
                  coords='807,4,1194,107'
                  shape='rect'
              />
          </map>
      </div>
  );
};

export default StackBanner;
