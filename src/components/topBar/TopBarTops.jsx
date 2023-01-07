import React from 'react'

const TopBarTops = (props) => {
    return (
        <>
            <div onMouseEnter={()=>{
                console.log('yes');
                document.querySelector('.bl').style.display = "block";
                document.querySelector('.top-bar').style.zIndex='102';
                props.func1(props.num);
            }} onMouseLeave={props.func2} className="flex tops mx-5 py-2 px-3">
                <img src="/static/images/icon.png" alt="" />
                <p className='mx-1'>{props.name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </>
    )
}

export default TopBarTops;
