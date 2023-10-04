import React from 'react';
import {Table, Image} from 'antd';
import billDetail from '../../data/billDetail.json'

const TableDetail = () => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Tên món',
            dataIndex: 'food',
            key: 'food',
        },
        {
            title: 'Ảnh món ăn',
            dataIndex: 'image',
            key: 'image',
            render: (img) => (
                <Image width={100} src={img}/>
            )
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
            key: 'price',
            render: (number) => {
                const format = number.toLocaleString();
                return (
                    <p>{format}</p>
                )
            }
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'total',
            key: 'total',
            render: (number) => {
                const format = number.toLocaleString();
                return (
                    <p>{format}</p>
                )
            }
        },
    ];

    const data = billDetail;

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </>
    )
};
export default TableDetail;