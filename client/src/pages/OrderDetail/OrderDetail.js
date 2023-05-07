import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import UserBox from '~/components/UserBox';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OrderDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('content')}>
                    <div className={cx('content-heading')}>Thông tin đơn hàng</div>

                    <div className={cx('user')}>
                        <UserBox interactiveUser avatarId="mono" idUser="Moi Moi Moi" content="Khách hàng"></UserBox>
                        <Button contact>Liên lạc</Button>
                    </div>

                    <div className={cx('input-field')}>
                        <div className={cx('sender')}>
                            <div className={cx('heading')}>Việt Nam</div>
                            <div className={cx('detail')}>Người gửi: <strong>Lê Quang Trung</strong></div>
                            <div className={cx('detail')}>Số điện thoại: <strong>0123456789</strong></div>
                            <div className={cx('detail')}>Địa chỉ gửi hàng: <strong>Số 34, Hàng Bún, Hà Nội</strong></div>
                            <div className={cx('detail')}>Chi nhánh gửi hàng: <strong>Hà Nội</strong></div>
                        </div>
                        <div className={cx('receiver')}>
                            <div className={cx('heading')}>Hàn Quốc</div>
                            <div className={cx('detail')}>Người gửi: <strong>Lê Quang Trung</strong></div>
                            <div className={cx('detail')}>Số điện thoại: <strong>0123456789</strong></div>
                            <div className={cx('detail')}>Địa chỉ gửi hàng: <strong>10 Jeongjail-ro 213beongil</strong></div>
                        </div>
                        <div className={cx('order')}>
                            <div className={cx('order-container')}>
                                <div className={cx('order-note')}>
                                    <div className={cx('sub-heading')}>Mục ghi chú (Không bắt buộc)</div>
                                    <textarea value={'Bạn lấy hộ mình mấy cái túi ni lông buộc kỹ từng món đồ này nhé, trời nóng, mình sợ các đồ này sẽ bị chảy hết ra (nhớ là buộc chặt vào nhé, thêm vài lớp bông càng tốt)'} readOnly></textarea>
                                </div>
                                <div className={cx('order-info')}>
                                    <table>
                                        <tr>
                                            <th className={cx('column9')}>
                                                <span className={cx('sub-heading')}>Nhập tên mặt hàng</span>
                                            </th>
                                            <th className={cx('column1')} style={{textAlign: 'center'}}>Số lượng</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" readOnly value={'Kem đánh răng Sensodie - Tuýp'}></input>
                                            </td>
                                            <td>
                                                <input type="text" readOnly value={'32'}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" readOnly value={'Kem đánh răng Sensodie - Tuýp'}></input>
                                            </td>
                                            <td>
                                                <input type="text" readOnly value={'32'}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" readOnly value={'Kem đánh răng Sensodie - Tuýp'}></input>
                                            </td>
                                            <td>
                                                <input type="text" readOnly value={'32'}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" readOnly value={'Kem đánh răng Sensodie - Tuýp'}></input>
                                            </td>
                                            <td>
                                                <input type="text" readOnly value={'32'}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" readOnly value={'Kem đánh răng Sensodie - Tuýp'}></input>
                                            </td>
                                            <td>
                                                <input type="text" readOnly value={'32'}></input>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
