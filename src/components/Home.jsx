import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

var st;

const Home = () => {
    const [value, setValue] = useState(0);
    const func1 = (id) => {
        // console.log(id);
        clearTimeout(st);
        setValue(id);
    };

    const func2 = () => {
        // setValue(0);
        // console.log(e.target);
        st = setTimeout(() => {
            setValue(0);
        }, 100);
    };

    const func3 = () => {
        clearTimeout(st);
    };

    const func4=()=>{
        document.querySelector('.bl').style.display="block";
        document.querySelector('.home-search-modal').style.display="block";
    };

    const func5=()=>{
        document.querySelector('.bl').style.display="none";
        document.querySelector('.home-search-modal').style.display="none";
    }

    return (
        <>
            <div onClick={func5} className="bl"></div>
            <div className="top-bar py-3.5 px-16">
                <div className="top-bar1 flex">
                    <div onMouseOver={() => {
                        func1(1);
                    }} onMouseLeave={func2} className="flex tops mx-8">
                        <img src="/static/images/icon.png" alt="" />
                        <p className='mx-1'>Cakes</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div onMouseOver={() => {
                        func1(2);
                    }} onMouseLeave={func2} className="flex tops mx-8">
                        <img src="/static/images/icon.png" alt="" />
                        <p className='mx-1'>Cakes</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div onMouseOver={() => {
                        func1(3);
                    }} onMouseLeave={func2} className="flex tops mx-8">
                        <img src="/static/images/icon.png" alt="" />
                        <p className='mx-1'>Cakes</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div onMouseOver={() => {
                        func1(4);
                    }} onMouseLeave={func2} className="flex tops mx-8">
                        <img src="/static/images/icon.png" alt="" />
                        <p className='mx-1'>Cakes</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                {value === 1 ? <div onMouseEnter={func3} onMouseLeave={func2} className="top-bar2 flex">
                    <div className="top-bar21 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="top-bar22 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div> : value === 2 ? <div onMouseEnter={func3} onMouseLeave={func2} className="top-bar2 flex">
                    <div className="top-bar21 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours 2</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="top-bar22 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div> : value === 3 ? <div onMouseEnter={func3} onMouseLeave={func2} className="top-bar2 flex">
                    <div className="top-bar21 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours 3</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="top-bar22 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div> : value === 4 ? <div onMouseEnter={func3} onMouseLeave={func2} className="top-bar2 flex">
                    <div className="top-bar21 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours 4</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="top-bar22 p-10">
                        <h5 className="text-lg mb-6">Cake by flavours</h5>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="top-bar211 mb-8">
                            <div className="flex mb-3">
                                <img src="/static/images/icon.png" alt="" />
                                <p className='font-semibold'>Butterscotch</p>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div> : null}
            </div>
            <div className="home-main py-4">
                <div className="home1 mb-5">
                    <div className="home11 flex">
                        <div className="home111 mx-3">
                            <h5 className='text-lg mb-6 text-center'>Superstores</h5>
                            <div className="flex home1111 items-center py-5">
                                <img className='pr-4' src="/static/images/icon.png" alt="" />
                                <p>Bajaj Mall</p>
                            </div>
                            <div className="flex home1111 items-center py-5">
                                <img className='pr-4' src="/static/images/icon.png" alt="" />
                                <p>Bajaj Mall</p>
                            </div>
                            <div className="flex home1111 items-center py-5">
                                <img className='pr-4' src="/static/images/icon.png" alt="" />
                                <p>Bajaj Mall</p>
                            </div>
                            <div className="flex home1111 items-center py-5">
                                <img className='pr-4' src="/static/images/icon.png" alt="" />
                                <p>Bajaj Mall</p>
                            </div>
                        </div>
                        <div className="home-slide">
                            <Splide aria-label="My Favorite Images" options={{
                                type: 'loop',
                                resetProgress: false,
                                autoplay: true,
                                height:'30rem'
                            }}>
                                <SplideSlide>
                                    <div className="home-img">
                                        <img src="/static/images/i1.jpg" alt="Image 1" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="home-img">
                                        <img src="/static/images/i2.jpg" alt="Image 2" />
                                    </div>
                                </SplideSlide>
                            </Splide>

                            <div className="home-search0">
                                <div className="home-search">
                                    <div className="hs1 flex">
                                        <b>BUY</b>
                                        <b>RENT</b>
                                        <b>COMMERCIAL</b>
                                        <b>PG/CO-LIVING</b>
                                        <b>PLOTS</b>
                                    </div>
                                    <div className="hs2 flex">
                                        <div className="hs21">
                                            Bhopal
                                        </div>
                                        <div className="hs22">
                                            <input onFocus={func4} type="text" placeholder='Search here ..' />
                                            <button>Search</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-search-modal">
                                    <div className="hsm1 p-7">
                                        <p className="text-sm mb-6">Check out most popular serches</p>
                                        <div className="flex mb-12">
                                            <div className="hsm11">
                                                Campus Power
                                            </div>
                                            <div className="hsm11">
                                                Campus Power
                                            </div>
                                            <div className="hsm11">
                                                Campus Power
                                            </div>
                                            <div className="hsm11">
                                                Campus Power
                                            </div>
                                        </div>
                                        <div className="hsm2 bg-white p-5">
                                            <p className="font-semibold mb-5">Choose The Product You Are Applying For</p>
                                            <div className="hsm2 flex flex-wrap">
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                                <div className="hsm-card items-center flex">
                                                    <img src="/static/images/icon.png" alt="" />
                                                    <p>Savings Account</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="home2 mt-12">
                    <Splide options={{
                        type: 'loop',
                        resetProgress: false,
                        autoplay: false,
                        perPage: 7,
                        perMove: 1
                    }} aria-label="My Favorite Images">
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home21">
                                <img src="/static/images/a1.png" alt="" />
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="home3 flex p-16">
                    <div className="home31">
                        <div className="home31-img1">
                            <img src="/static/images/world.png" alt="" />
                        </div>
                        <div className="home31-img2 home31-img">
                            <img src="/static/images/a1.png" alt="" />
                        </div>
                        <div className="home31-img3 home31-img">
                            <img src="/static/images/a1.png" alt="" />
                        </div>
                        <div className="home31-img4 home31-img">
                            <img src="/static/images/a1.png" alt="" />
                        </div>
                        <div className="home31-img5 home31-img">
                            <img src="/static/images/a1.png" alt="" />
                        </div>
                    </div>
                    <div className="home32">
                        <h4>World's leading chain of hotels and homes</h4>
                        <p>More Destinations. More Ease. More Affordable.</p>
                        <div className="home320 flex">
                            <div className='mr-3'>
                                <h3>35</h3>
                                <p>Countries</p>
                            </div>
                            <div className='ml-3'>
                                <h3>35</h3>
                                <p>Countries</p>
                            </div>
                        </div>
                        <div className="home321 flex flex-wrap">
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <div className="dot"></div>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home