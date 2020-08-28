import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Wrap = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Article = styled.div`
    width:40%;
    height:fit-content;
    text-align:center;
`

const TestBtn = styled.div`
    background:black;
    color:white;
    text-align:center;
    height:3rem;
    width:10rem;
    line-height:3rem;
    margin:0 auto;
`

const ImportApiTest = () => {
    const IMPORT = () => {
        const { IMP } = window;
        IMP.init('imp57980741');
        IMP.request_pay({
            pg : 'html5_inicis', // version 1.1.0부터 지원.
            pay_method : 'card',
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : '텐글 1개월 이용권',
            amount : 100,
            buyer_email : '',
            buyer_name : '구매자이름',
            buyer_tel : '010-1234-5678',
            buyer_addr : '서울특별시 강남구 삼성동',
            buyer_postcode : '123-456',
            m_redirect_url : 'http://tengle.co.kr'
        }, function(rsp) {
            if ( rsp.success ) {
                // var msg = '결제가 완료되었습니다.';
                // msg += '고유ID : ' + rsp.imp_uid;
                // msg += '상점 거래ID : ' + rsp.merchant_uid;
                // msg += '결제 금액 : ' + rsp.paid_amount;
                // msg += '카드 승인번호 : ' + rsp.apply_num;
                axios.create().get(`https://api.iamport.kr/payments/${rsp.imp_uid}?_token=1d84b25123ad0faa1846cde4a89317bdb31d22df`)
                .then(res => {
                    console.log(res)
                    if(res.data.amount === 100 && res.data.status === 'paid'){
                        alert('결제가 정상 처리되었습니다.')
                    }
                })
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            console.log(msg);
        });
    }
    return (
        <Wrap>
            <Article>
                아임포트 결제 테스트<br/><br/>
                <TestBtn onClick={IMPORT}>결제요청</TestBtn>
            </Article>
        </Wrap>
    )
}
// imp_109027331616
//1d84b25123ad0faa1846cde4a89317bdb31d22df
// merchannt_1598589027181

export default ImportApiTest