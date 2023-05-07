import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import icons from '~/assets/icons/icons';
import UserBox from '~/components/UserBox';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function OrderList() {

    const [orders,setOrders] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/getOrder')
          .then(response => response.json())
          .then(data => {
            setOrders(data)
            
          })
          .catch(error => console.error(error));
      }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('content')}>
                    <div className={cx('content-heading')}>Danh sách đơn hàng</div>

                    <table className={cx('list-table')}>
                        <tr>
                            <th className={cx('column4')}>
                                <input type='text' placeholder='theo tên người dùng'></input>
                            </th>
                            <th className={cx('column2')}>
                                <input type='text' placeholder='Theo thời gian'></input>
                            </th>
                            {/* <th className={cx('column3')}>
                                <input type='text' placeholder='Theo địa chỉ kho hàng'></input>
                            </th> */}
                            <th className={cx('column1')}>
                                <span>
                                    <Button search>Tra cứu</Button>
                                </span>
                            </th>
                        </tr>
                        {orders?.map((order,index)=>{
                            return (
                         <tr key={index}>
                            <td>{order.customerName}</td>
                            <td>{order.time}</td>
                            {/* <td>Số 34, Hàng Bún, Hà Nội</td> */}
                            <td>
                                <span>
                                    <Button detail option to = '/orderDetail'>Chi tiết</Button>
                                </span>
                            </td>
                        </tr> 
                            )
                        })}

                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
