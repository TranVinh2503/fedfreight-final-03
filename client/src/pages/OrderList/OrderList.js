import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import icons from '~/assets/icons/icons';
import UserBox from '~/components/UserBox';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OrderList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('content')}>
                    <div className={cx('content-heading')}>Danh sách đơn hàng</div>

                    <table className={cx('list-table')}>
                        <tr>
                            <th className={cx('column4')}>
                                <input type='text' placeholder='Theo họ và tên'></input>
                            </th>
                            <th className={cx('column2')}>
                                <input type='text' placeholder='Theo thời gian'></input>
                            </th>
                            <th className={cx('column3')}>
                                <input type='text' placeholder='Theo địa chỉ kho hàng'></input>
                            </th>
                            <th className={cx('column1')}>
                                <span>
                                    <Button search>Tra cứu</Button>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <td>Lê Quang Trung</td>
                            <td>31/02/2023</td>
                            <td>Số 34, Hàng Bún, Hà Nội</td>
                            <td>
                                <span>
                                    <Button detail>Chi tiết</Button>
                                </span>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
