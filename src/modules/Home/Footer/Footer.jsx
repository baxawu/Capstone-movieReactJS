import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import style from "./FooterStyle.module.scss"
import dataIcon from "./dataIcon.json";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext/UserContext';

export default function Footer() {
    // const {currentUser} = useUserContext();

    // const handleGoToAdminPage = () =>{
    //     if(!currentUser){
    //         return navigate("/sign-in")
    //     }
    //     if(currentUser && currentUser.quan)
    // }
    const navigate = useNavigate()
    return (
        <footer className={style.jss1}>
            <Container maxWidth="lg">
                <Container sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Grid container className={style.jss2}>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Typography>
                                <h6 className={style.jss3}>TIX</h6>
                                <Grid container>
                                    <Grid item xs={6}><a href="" className={style.jss4}>FAQ</a></Grid>
                                    <Grid item xs={6}><a className={style.jss4}>Thỏa thuận sử dụng</a></Grid>
                                    <Grid item xs={6}><a className={style.jss4}>Brand Guidelines</a></Grid>
                                    <Grid item xs={6}><a className={style.jss4}>Chính sách bảo mật</a></Grid>
                                </Grid>
                                <a onClick={() => navigate("/admin")} className={style.jss10}>
                                    <AdminPanelSettingsIcon />
                                    <h6 className={style.jss3}>CHUYỂN ĐẾN TRANG ADMIN</h6>
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                <h6 className={style.jss3}>ĐỐI TÁC</h6>
                                <Grid container>
                                    {dataIcon.map((icon) => {
                                        return (
                                            <Grid item xs={3} className={style.jss5}>
                                                <a href={icon.link}>
                                                    <img src={icon.logo} alt="" className={style.jss6} />
                                                </a>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography>
                                        <h6 className={style.jss3}>MOBILE APP</h6>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                                                    <img src="./image/appleicon.png" alt="" className={style.jss7} />
                                                </a>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                                    <img src="./image/androiicon.png" alt="" className={style.jss7} />
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        <h6 className={style.jss3}>SOCIAL</h6>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <a href="https://facebook.com">
                                                    <img src="./image/fbicon.png" alt="" className={style.jss7} />
                                                </a>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <a href="https://zalo.com">
                                                    <img src="./image/zaloicon.png" alt="" className={style.jss7} />
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <hr />
                <Typography>
                    <Grid container>
                        <Grid item xs={12} sm={3} lg={2}>
                            <img src="./image/zionicon.jpg" alt="" width={100} className={style.jss8} />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={8}>
                            <Typography style={{ marginBottom: '16px' }}>
                                <h6 className={style.jss8}>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
                                <h6 className={style.jss9}>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                                </h6>
                                <h6 className={style.jss9}>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                                </h6>
                                <h6 className={style.jss9}>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</h6>
                                <h6 className={style.jss9}>Số Điện Thoại (Hotline): 1900 545 436</h6>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} lg={2}>
                            <img src="./image/dathongbao.png" alt="" width={100} className={style.jss8} />
                        </Grid>
                    </Grid>
                </Typography>

            </Container>
        </footer>
    )
}
