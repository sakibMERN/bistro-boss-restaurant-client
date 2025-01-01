import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center max-w-72 mx-auto'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-2 font-bold py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;