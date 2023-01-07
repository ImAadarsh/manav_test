import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TopBar from './topBar/TopBar';
import Card1 from './card/Card1';

const Home = () => {
    const func4 = () => {
        document.querySelector('.bl').style.display = "block";
        document.querySelector('.home-search-modal').style.display = "block";
    };

    const func5 = () => {
        document.querySelector('.bl').style.display = "none";
        document.querySelector('.home-search-modal').style.display = "none";
    }

    return (
        <>
            <div onClick={func5} className="bl"></div>

            <TopBar />

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
                                height: '30rem'
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
                                        <div className="flex justify-between mb-12">
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
                        perMove: 1,
                        height: '10rem'
                    }} aria-label="My Favorite Images">
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="home210">
                                <div className="home21">
                                    <img src="/static/images/a1.png" alt="" />
                                </div>
                                <p className="mt-3">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="home-cards">
                    <h5>Balloon Decorations</h5>
                    <Splide options={{
                        type: 'loop',
                        resetProgress: false,
                        autoplay: false,
                        perPage: 4,
                        perMove: 1,
                    }} aria-label="My Favorite Images">
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="home-cards">
                    <h5>Balloon Decorations</h5>
                    <Splide options={{
                        type: 'loop',
                        resetProgress: false,
                        autoplay: false,
                        perPage: 4,
                        perMove: 1,
                    }} aria-label="My Favorite Images">
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="home-cards">
                    <h5>Balloon Decorations</h5>
                    <Splide options={{
                        type: 'loop',
                        resetProgress: false,
                        autoplay: false,
                        perPage: 4,
                        perMove: 1,
                    }} aria-label="My Favorite Images">
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                        <SplideSlide>
                            <Card1 image="product.png" />
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="home4 px-12 my-20">
                    <div class="p-4 bg-gray-100 rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                        <dl class=" max-w-screen-xl flex justify-between p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="home-5 px-12 my-20">
                    <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-100 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h3>
                                <p class="my-4 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, maiores.</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center space-x-3">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Bonnie Green</div>
                                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-100 border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                                <p class="my-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam assumenda est dolorum provident at amet molestiae, ut adipisci ex!</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center space-x-3">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Roberta Casas</div>
                                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-100 border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                                <p class="my-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat aliquam nostrum et tempore iure!</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center space-x-3">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Jese Leos</div>
                                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-100 border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                                <p class="my-4 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, in fugiat. Atque, iusto!</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center space-x-3">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Joseph McFall</div>
                                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>


                <div className="home3 flex p-16">
                    <div className="home31">
                        <div className="home31-img1">
                            <img src="/static/images/world.png" alt="" />
                        </div>
                        <div className="home31-img2 home31-img">
                            <img onMouseEnter={(e) => {
                                e.target.nextElementSibling.classList.remove('hidden');
                            }} onMouseLeave={(e) => {
                                e.target.nextElementSibling.classList.add('hidden');
                            }} src="/static/images/c1.png" alt="" />
                            <p className='text-center hidden font-semibold'>Spain</p>
                        </div>
                        <div className="home31-img3 home31-img">
                            <img onMouseEnter={(e) => {
                                e.target.nextElementSibling.classList.remove('hidden');
                            }} onMouseLeave={(e) => {
                                e.target.nextElementSibling.classList.add('hidden');
                            }} src="/static/images/c2.png" alt="" />
                            <p className='text-center hidden font-semibold'>Nepal</p>
                        </div>
                        <div className="home31-img4 home31-img">
                            <img onMouseEnter={(e) => {
                                e.target.nextElementSibling.classList.remove('hidden');
                            }} onMouseLeave={(e) => {
                                e.target.nextElementSibling.classList.add('hidden');
                            }} src="/static/images/c3.png" alt="" />
                            <p className='text-center hidden font-semibold'>India</p>
                        </div>
                        <div className="home31-img5 home31-img">
                            <img onMouseEnter={(e) => {
                                e.target.nextElementSibling.classList.remove('hidden');
                            }} onMouseLeave={(e) => {
                                e.target.nextElementSibling.classList.add('hidden');
                            }} src="/static/images/c4.png" alt="" />
                            <p className='text-center hidden font-semibold'>China</p>
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
                                <span class="flex w-2 h-2 bg-teal-500 mr-1 rounded-full"></span>
                                <p>Spain</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <span class="flex w-2 h-2 bg-blue-500 mr-1 rounded-full"></span>
                                <p>Nepal</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <span class="flex w-2 h-2 bg-green-500 mr-1 rounded-full"></span>
                                <p>India</p>
                            </div>
                            <div className="home3211 flex items-center">
                                <span class="flex w-2 h-2 bg-red-400 mr-1 rounded-full"></span>
                                <p>China</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home