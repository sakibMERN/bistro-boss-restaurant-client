import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';


const Order = () => {
    return (
        <div className='pt-20'>
            <Cover img={orderCover} title={'Order Food'}></Cover>
        </div>
    );
};

export default Order;