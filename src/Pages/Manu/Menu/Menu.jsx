import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import CoverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div className='pt-[76px]'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover menuImg={CoverImg} title={'Our Menu'}></Cover>
            <PopularMenu></PopularMenu>
            <h2 className="text-5xl">Menu Page</h2>
        </div>
    );
};

export default Menu;