import './output.css';
import React from "react";
import { Layout, Col, Row} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {faCartShopping, faHeart, faMagnifyingGlass, faShuffle, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from './components/Images';
import Table from './components/Table';
import Table2 from './components/Table2';

function App() {
    return (
        <div>
            <Layout>
                <Header className="bg-white my-px-20 header py-2">
                    <Row className="relative">
                        <Col span={3} className="relative">
                            <Logo />
                        </Col>
                        <Col span={16} className="flex items-center justify-center">
                            <ul className="flex">
                                <li className="px-3">
                                    <button>Trang chủ</button>
                                </li>
                                <li className="px-3">
                                    <button>Giới thiệu</button>
                                </li>
                                <li className="px-3">
                                    <button>Thực đơn</button>
                                </li>
                                <li className="px-3">
                                    <button>Tin tức</button>
                                </li>
                                <li className="px-3">
                                    <button>Liên hệ</button>
                                </li>
                            </ul>
                        </Col>
                        <Col span={5} className="flex items-center">
                            <button>
                                <FontAwesomeIcon className="my-icon mx-2" icon={faMagnifyingGlass} />
                            </button>

                            <button>
                                <FontAwesomeIcon className="my-icon mx-2" icon={faUser} />
                            </button>

                            <button>
                                <FontAwesomeIcon className="my-icon mx-2" icon={faShuffle} />
                            </button>

                            <button>
                                <FontAwesomeIcon className="my-icon mx-2" icon={faHeart} />
                            </button>

                            <button>
                                <FontAwesomeIcon className="my-icon mx-2" icon={faCartShopping} />
                            </button>
                        </Col>
                    </Row>
                </Header>

                <Content className="pb-20 bg-white">
                    <Row>
                        <Col span={24}>
                            <h1 className="text-center text-lg py-5">
                                <span>TRANG CHỦ</span> <span className="px-3">/</span> <span>LỊCH SỬ ĐƠN HÀNG</span>
                            </h1>
                        </Col>
                    </Row>
                    <Row className="bg-white my-px-20">
                        <Col span={24}>
                            <h1 className="text-lg pt-5 pb-2">Lịch sử đơn hàng</h1>
                            <Table />
                        </Col>
                    </Row>
                </Content>

                <Footer className="bg-[url('../public/assets/images/ft.jpg')]">
                    <footer className="mt-20">
                        <div id="footer" className="flex text-white justify-around">
                            <div className="flex flex-wrap justify-around">
                                <div className="sm:w-1/5 sm:flex sm:flex-wrap sm:justify-center w-full">
                                    <Logo />
                                    <p className="text-center my-3">Poly Food là nhà hàng Thuần chay và Cung cấp thực phẩm chay</p>
                                </div>

                                <div className="w-full mt-5 sm:w-1/3">
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <p><b>Cửa hàng</b></p>
                                            <ul className="py-2">
                                                <li className="py-2"><a href="#">Về chúng tôi</a></li>
                                                <li className="py-2"><a href="#">Liên hệ</a></li>
                                                <li className="py-2"><a href="#">Tin tức</a></li>
                                                <li className="py-2"><a href="#">Hỗ trợ</a></li>
                                            </ul>
                                        </div>
                                        <div className="w-full">
                                            <p><b>Chính sách mua hàng</b></p>
                                            <ul className="py-2">
                                                <li className="py-2"><a href="#">Điều khoản</a></li>
                                                <li className="py-2"><a href="#">Chính sách & bảo mật</a></li>
                                                <li className="py-2"><a href="#">Theo dõi chúng tôi</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="full mt-5 sm:w-1/3">
                                    <p className="py-1"><b>Đăng ký ngay</b></p>
                                    <p className="pb-2"><i>Nhận thông báo mới nhất qua email về những tin tức của chúng tôi</i></p>
                                    <form action="#">
                                        <input className="w-full my-2 text-black p-2" type="email" placeholder="Nhập email của bạn" />
                                        <button className="border-white border-2 p-2" type="submit">ĐĂNG KÝ</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </footer>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
