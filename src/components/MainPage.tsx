import React from 'react';
import Hero from './main/Hero';

const MainPage = () => {
    return (
        <div  style={{
        background: `url(/mainbg.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
            <Hero/>
        </div>
    );
};

export default MainPage;