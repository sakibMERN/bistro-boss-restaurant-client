import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === "popular");
            setMenu(popularItem);
        })
    }, [])
    return (
        <section className='my-20'> 
            <SectionTitle heading={'Form Our Menu'} subHeading={'Popular Menu'}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-14'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-5'>
            <button className='btn btn-warning btn-outline border-0 border-b-4'>View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;