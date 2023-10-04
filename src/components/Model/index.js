import React, { useState } from 'react';
import { Button, Modal, Row, Col, Tag } from 'antd';
import '../../dist/output.css';
import TableDetail from "../TableDetail";
const Popup = () => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Button className="my-detail" type="primary" onClick={() => setModal(true)}>
                Chi tiết
            </Button>
            <Modal
                className="my-modal"
                title="Đơn của bạn tại POLYFOOD"
                centered
                open={modal}
                footer={null}
                onCancel={() => setModal(false)}
            >
                <Row>
                    <Col span={7}>
                        <p className="py-2"><span className="text-gray-400">Tên khách hàng: </span>Lê Văn Thuận</p>
                        <p className="py-2"><span className="text-gray-400">Tổng tiền: </span>167.400 VNĐ</p>
                        <p className="py-2">
                            <span className="text-gray-400">Hóa đơn: </span>
                            <button className="my-print">In hóa đơn</button>
                        </p>
                    </Col>
                    <Col span={7}>
                        <p className="py-2"><span className="text-gray-400">Số điện thoại: </span>0352988596</p>
                        <p className="py-2">
                            <span className="text-gray-400">Phương thức thanh toán: </span>
                            <Tag color="green">
                                Thanh Toán Online
                            </Tag>
                        </p>
                    </Col>
                    <Col span={10}>
                        <p className="py-2"><span className="text-gray-400">Địa chỉ: </span>
                            Cao đẳng fpt - Phường xuân phương Nam Từ Liêm Hà Nội</p>
                        <p className="py-2"><span className="text-gray-400">Mã hóa đơn: </span>
                            poly__202309181046418804</p>
                    </Col>
                    <Col span={24}>
                        <TableDetail/>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};
export default Popup;