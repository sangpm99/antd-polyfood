import React from 'react';
import {Table, Tag} from 'antd';
import billData from '../../data/bill.json';
import Popup from "../Model";

const TableBill = () => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã đơn hàng',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Trạng thái đơn hàng',
            dataIndex: 'status',
            key: 'status',
            render: (status) =>
                <Tag
                    color={
                        (status === 0 || status === 1)
                        ? ((status === 0) ? 'volcano' : 'green') : ('blue')
                    }
                >
                    {
                        (status === 0 || status === 1)
                            ? ((status === 0) ? 'Khách hàng hủy' : 'Hoàn thành') : ('Đang xử lý')
                    }
                </Tag>
        },

        {
            title: 'Ngày tạo đơn',
            key: 'dateOfBill',
            dataIndex: 'dateOfBill',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            // render: () => <Tag className="text-sm text-white bg-blue-500 py-1 px-2 cursor-pointer">Chi tiết</Tag>,
            render: (_, record) => (
                    <Popup title="Sure to delete?">

                    </Popup>
                )
        },
    ];

    const data = billData;

    const pagination = {
        pageSize: 6,
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
            />
        </>
    )
};
export default TableBill;