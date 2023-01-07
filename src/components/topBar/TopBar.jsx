import React, { useState } from 'react'
import TopBarModal from './TopBarModal';
import TopBarTops from './TopBarTops';

var st;

const TopBar = () => {
    const [value, setValue] = useState(0);
    const [isInModal, setIsInModal] = useState(false);
    const func1 = (id) => {
        setValue(0);
        clearTimeout(st);
        if(isInModal)
        {
            setTimeout(() => {
                setValue(id)
            }, 10);
        }
        else
        {
            setValue(id);
        }
    };

    const func2 = () => {
        st = setTimeout(() => {
            setValue(0);
        }, 100);
        setIsInModal(false);
        document.querySelector('.bl').style.display = "none";
        document.querySelector('.top-bar').style.zIndex='auto';
    };

    const func3 = () => {
        setIsInModal(true);
        clearTimeout(st);
        document.querySelector('.bl').style.display = "block";
        document.querySelector('.top-bar').style.zIndex='102';
    };

    return (
        <>
            <div className="top-bar py-1.5 px-16">
                <div className="top-bar1 flex">
                    <TopBarTops func1={func1} func2={func2} num={1} name={'Category'} />
                    <TopBarTops func1={func1} func2={func2} num={2} name={'Cake'} />
                    <TopBarTops func1={func1} func2={func2} num={3} name={'Hill'} />
                    <TopBarTops func1={func1} func2={func2} num={4} name={'Sloth'} />
                    <TopBarTops func1={func1} func2={func2} num={5} name={'Pen'} />
                </div>
                {value === 1 ? <TopBarModal func3={func3} func2={func2} name={'Category Modal'} /> : value === 2 ? <TopBarModal func3={func3} func2={func2} name={'Cake Modal'} /> : value === 3 ? <TopBarModal func3={func3} func2={func2} name={'Hill Modal'} /> : value === 4 ? <TopBarModal func3={func3} func2={func2} name={'Sloth Modal'} /> : value===5 ? <TopBarModal func3={func3} func2={func2} name={'Pen Modal'} /> : null}
            </div>
        </>
    )
}

export default TopBar;
