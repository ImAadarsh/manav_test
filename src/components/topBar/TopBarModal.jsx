import React from 'react'

const TopBarModal = (props) => {
    return (
        <>
            <div onMouseEnter={props.func3} onMouseLeave={props.func2} className="top-bar2 flex">
                <div className="top-bar21 p-10">
                    <h5 className="text-lg mb-6">{props.name}</h5>
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
            </div>
        </>
    )
}

export default TopBarModal;
