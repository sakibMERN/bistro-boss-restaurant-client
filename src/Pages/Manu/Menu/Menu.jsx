import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import CoverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className='pt-[76px]'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover menuImg={CoverImg} title={'Our Menu'}></Cover>
            {/* Today's offer section */}
            <section className='my-20'>
                <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </section>
            {/* Desert Section */}
            <section className='my-20'>
                {/* <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle> */}
                <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg}></MenuCategory>
            </section>

            {/* Pizza Section */}
            <section className='my-20'>
                {/* <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle> */}
                <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
            </section>

            {/* Salad Section */}
            <section className='my-20'>
                {/* <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle> */}
                <MenuCategory items={salad} title={"Salad"} coverImg={saladImg}></MenuCategory>
            </section>
            {/* Salad Section */}
            <section className='my-20'>
                {/* <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle> */}
                <MenuCategory items={soup} title={"Soups"} coverImg={soupImg}></MenuCategory>
            </section>
            
            
        </div>
    );
};

export default Menu;