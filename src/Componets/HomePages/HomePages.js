import React from 'react';
import HeaderSlider from './HeaderSlider/HeaderSlider';
import ToolsServices from './ToolsServices/ToolsServices';
import Footer from '../Shared/Footer/Footer';
import ToolChoose from './ToolChoose/ToolChoose';
import Review from './Review/Review';
import DisCount from '../DisCount/DisCount';

const HomePages = () => {
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <ToolsServices></ToolsServices>
            <ToolChoose></ToolChoose>
            <DisCount></DisCount>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default HomePages;