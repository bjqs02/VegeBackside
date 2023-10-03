import 'bootstrap/dist/css/bootstrap.css'
import '../order.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import $ from 'jquery';

function AdminOrder() {

  var [lists, setLists] = useState([]);

  var getLists = async () => {
    var response = await axios.get('http://localhost:2407/getorder/all/');
    // console.log(response.data)
    setLists(response.data);
  }

  useEffect(() => {
    getLists()
  }, [])
  console.log(lists)

  function editItem(itemId) {
    console.log(itemId);
    // $('#orderModal').modal('show');
    // document.getElementById('orderModal').classList.add('show');
    //                     // $.get(`/getorderstatus/${oid}`, function (res) {
    //                     $.get(`/getorderstatus/${itemId}`, function (res) {
    //                         // 讀取訂單基本資訊
    //                         // console.log(res[0]);
    //                         myOid.innerText = res[0].oid;
    //                         myDate.innerText = res[0].o_ceatetime.split('T')[0];
    //                         res[0].payment ? myPay.innerText = "LinePay" : "";
    //                         res[0].creditNum ? myPay.innerText = "信用卡" : "";
    //                         res[0].transNum ? myPay.innerText = "匯款轉帳" : "";
    //                         myStatus.innerText = res[0].o_status;
    //                         res[0].useCoupon ? myCoupon.innerText = res[0].useCoupon : myCoupon.innerText = 0;
    //                         res[0].useBonus ? myBonus.innerText = -res[0].useBonus : myBonus.innerText = 0;
    //                         myoName.innerText = res[0].oName;
    //                         myoTel.innerText = res[0].oTel;
    //                         myoMail.innerText = res[0].oMail;
    //                         res[0].rName? myrName.innerText = res[0].rName : myrName.innerText = res[0].convName;
    //                         res[0].rTel? myrTel.innerText = res[0].rTel : myrTel.innerText = res[0].rTel = res[0].convTel;
    //                         res[0].convStore == '尚未選擇' || res[0].convStore == null ? myrAddr.innerText = res[0].rAddr : myrAddr.innerText = res[0].convStore;
    //                         res[0].o_note ? myoNote.innerText = res[0].o_note : myoNote.innerText = '無備註';

    //                         //讀取產品清單、運費、總金額、配送日期等資訊
    //                         var total = 0;
    //                         var shippingfee = 0;
    //                         var bonus = parseInt(myBonus.innerText);
    //                         var coupon = parseInt(myCoupon.innerText);
    //                         $('.trHtml').remove();
    //                         res.map((item) => {
    //                             // console.log(item)
    //                             // 計算預計配送日期(單次配訂單成立日期+3天後 / 周周配根據使用者輸入禮拜一或禮拜三，隔周開始配送)
    //                             var shippingDateArr = [];
    //                             // console.log(item.o_ceatetime.split('T')[0])
    //                             var date = new Date(item.o_ceatetime.split('T')[0]);
    //                             // var date = new Date('2023-10-2'); // 測試用
    //                             // console.log(date.getDay())
    //                             if (item.freq == 'once') {
    //                                 var temp = date.setDate(date.getDate() + 3)
    //                                 // 單次配送遇週六、日則順延
    //                                 if( date.getDay(temp) == '6'){
    //                                     date.setDate(date.getDate() + 2)
    //                                 } else if ( date.getDay(temp) == '0' ){
    //                                     date.setDate(date.getDate() + 1)
    //                                 } 
    //                             } else {
    //                                 switch (date.getDay()) {
    //                                     case 0: // 禮拜天
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 8)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 10)
    //                                         }
    //                                         break;
    //                                     case 1:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 7)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 9)
    //                                         }
    //                                         break;
    //                                     case 2:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 6)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 8)
    //                                         }
    //                                         break;
    //                                     case 3:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 5)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 7)
    //                                         }
    //                                         break;
    //                                     case 4:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 4)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 6)
    //                                         }
    //                                         break;
    //                                     case 5:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 3)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 5)
    //                                         }
    //                                         break;
    //                                     case 6:
    //                                         if (item.day == "星期一") {
    //                                             date.setDate(date.getDate() + 9)
    //                                         } else {
    //                                             date.setDate(date.getDate() + 11)
    //                                         }
    //                                         break;
    //                                 }
    //                             }
    //                             var myshippingDate = (date.getMonth() + 1) + '/' + date.getDate();

    //                             // 購買品項
    //                             item.size == 's' ? fee = 160 : fee = 290; // 運費 (S-160 L-290)
    //                             item.size == 's' ? item.size = '雙人箱(1~2人)' : item.size = '家庭箱(3~4人)';
    //                             // item.c_option ? item.c_option = item.c_option.split(',').slice(1,) : item.c_option = '';
    //                             item.con ? item.con = item.con : item.con = '';
    //                             item.day? item.day = item.day: item.day = '';

    //                             // 設定自選箱價格(根據localStorage)
    //                             // if (item.product.includes('自選')) {
    //                             //     item.price = localStorage.getItem(`optionPrice${item.cid}`);
    //                             //     item.content = item.con
    //                             // }

    //                             if (item.freq == 'once') {
    //                                 item.freq = '單次購買';
    //                                 item.day = '';
    //                                 shippingDateArr.push(myshippingDate)
    //                             } else if (item.freq == '30d') {
    //                                 item.freq = '每周一次';
    //                                 for (var i = 0; i <= 21; i += 7) {
    //                                     var date2 = new Date(myshippingDate);
    //                                     date2.setDate(date2.getDate() + i);
    //                                     var myshippingDate2 = (date2.getMonth() + 1) + '/' + date2.getDate();
    //                                     shippingDateArr.push(myshippingDate2);
    //                                 }
    //                             } else {
    //                                 item.freq = '雙周一次';
    //                                 for (var i = 0; i < 56; i += 14) {
    //                                     var date3 = new Date(myshippingDate);
    //                                     date3.setDate(date3.getDate() + i);
    //                                     var myshippingDate3 = (date3.getMonth() + 1) + '/' + date3.getDate();
    //                                     shippingDateArr.push(myshippingDate3);
    //                                 }

    //                             }
    //                             item.c_note == null ? item.c_note = '無' : item.c_note;
    //                             if (item.size == '雙人箱(1~2人)' && item.freq == '單次購買') {
    //                                 item.price = parseInt(item.price) * item.quantity
    //                             } else if (item.size == '家庭箱(3~4人)' && item.freq == '單次購買') {
    //                                 item.price = (parseInt(item.price) + 200) * item.quantity
    //                             } else if (item.size == '雙人箱(1~2人)' && item.freq == '每周一次') {
    //                                 item.price = (parseInt(item.price) * 4) * item.quantity
    //                             } else if (item.size == '家庭箱(3~4人)' && item.freq == '每周一次') {
    //                                 item.price = ((parseInt(item.price) + 200) * 4) * item.quantity
    //                             } else if (item.size == '雙人箱(1~2人)' && item.freq == '雙周一次') {
    //                                 item.price = (parseInt(item.price) * 4) * item.quantity
    //                             } else {
    //                                 item.price = ((parseInt(item.price) + 200) * 4) * item.quantity
    //                             }

    //                             // 設定自選箱價格(根據cart資料表)
    //                             if (item.product.includes('自選')) {
    //                                 item.price = parseInt(item.money);
    //                                 item.content = item.con
    //                             }

    //                             var trHtml = `
    //                             <tr class="trHtml">
    //                                 <td>${item.product}</td>
    //                                 <td>${item.content}</td>
    //                                 <td>${item.size}<br> ${item.freq} ${item.day}</td>
    //                                 <td>${item.c_note}</td>
    //                                 <td>${item.quantity}</td>
    //                                 <td>${item.price}</td>
    //                             </tr>
    //                             <tr class="trHtml border-bottom" style="color: #0d5946;">
    //                                 <td colspan="6" class="vg-ps my-2 text-end py-2"><i class="fa-solid fa-truck mx-1"></i>預計配送日期：<span>${shippingDateArr}</span></td>
    //                             </tr>
    //                         `;
    //                             $('#myOitem').after(trHtml);
    //                             shippingfee += fee;
    //                             total += item.price;
    //                         })
    //                         // 運費計算
    //                         myDelivery.innerText = shippingfee;
    //                         // 總金額計算
    //                         $('#myTotal').text(shippingfee + total + bonus + coupon)
    //                     })

    //                     // 確認 => 關閉modal
    //                     $('#ordermodalok').on('click', () => {
    //                         $('#orderModal').modal('hide')
    //                     })

    //                     $('#rateOrder').on('click', () => {
    //                         localStorage.setItem('oid', oid)
    //                         location.href = '/rateorder';
    //                     })
  }







  return (<>
    <div className="text-center my-5 container" id="nav">
      <a href="/admin/order/" className="btn btn-outline-secondary mx-2">所有訂單</a>
      <a href="/admin/order/pending" className="btn btn-outline-secondary mx-2">pending</a>
      <a href="/admin/order/inactive" className="btn btn-outline-secondary mx-2">inactive</a>
    </div>
    <div className="container" id="orderListAll">
      <table className="w-100">
        <thead>
          <tr className="text-center border">
            <th className="px-3">編號</th>
            <th className="px-3">日期</th>
            <th className="px-3">帳號</th>
            <th className="px-3">購買人</th>
            <th className="px-3">總金額</th>
            <th className="px-3">狀態</th>
            <th className="px-3">評價</th>
            <th className="px-3" colSpan={2}>操作</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((item, index) => {
            return (
              <tr className="text-center border-bottom" key={index}>
                <td>{item.oid}</td>
                <td>{item.o_ceatetime.split('T')[0]}</td>
                <td>{item.uid}</td>
                <td>{item.oName}</td>
                <td>{item.sum_money}</td>
                <td>{item.o_status}</td>
                <td>{item.r_status}</td>
                <td><button className="btn btn-sm btn-outline-info" onClick={() => editItem(item.oid)}>編輯</button></td>
                <td><button className="btn btn-sm btn-outline-warning">刪除</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

    <div className="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title" id="orderModalLabel">Vege</h5>
          </div>
          <div className="modal-body">
            <div>
              <h5>訂單內容</h5>
              <hr />
              <table className="w-100">
                <tr>
                  <th>訂單號碼</th>
                  <th>訂單日期</th>
                  <th>付款方式</th>
                  <th>訂單狀態</th>
                </tr>
                <tr>
                  <td id="myOid">測試資料</td>
                  <td id="myDate">測試資料</td>
                  <td id="myPay">測試資料</td>
                  <td id="myStatus">測試資料</td>
                </tr>
              </table>
            </div>
            <hr />
            <div>
              <h5>產品清單</h5>
              <hr />
              <table className="w-100">
                <tr id="myOitem">
                  <th>名稱</th>
                  <th>內容</th>
                  <th className="w-25">規格</th>
                  <th>備註</th>
                  <th>#</th>
                  <th className="w-25">價格</th>
                </tr>
              </table>
            </div>
            <hr />
            <div>
              <h5>訂單金額</h5>
              <hr />
              <table className="w-100">
                <tr>
                  <th>折扣碼</th>
                  <th>購物金</th>
                  <th>運費</th>
                  <th>總金額</th>
                </tr>
                <tr>
                  <td id="myCoupon">-99</td>
                  <td id="myBonus">-99</td>
                  <td id="myDelivery">999</td>
                  <td id="myTotal">9999</td>
                </tr>
              </table>
            </div>
            <hr />
            <div>
              <h5>訂購人資訊</h5>
              <hr />
              <table className="w-100">
                <tr>
                  <th>姓名</th>
                  <th>電話</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td id="myoName">測試資料</td>
                  <td id="myoTel">測試資料</td>
                  <td id="myoMail">測試資料</td>
                </tr>
              </table>
            </div>
            <hr />
            <div>
              <h5>收件人資訊</h5>
              <hr />
              <table className="w-100">
                <tr>
                  <th>姓名</th>
                  <th>電話</th>
                  <th>地址</th>
                </tr>
                <tr>
                  <td id="myrName">測試資料</td>
                  <td id="myrTel">測試資料</td>
                  <td id="myrAddr">測試資料</td>
                </tr>
              </table>
            </div>
            <hr />
            <div>
              <h5>訂單備註</h5>
              <hr />
              <table className="w-100">
                <tr>
                  <td id="myoNote">測試資料</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="modal-footer mx-auto">
            <button type="button" className="btn btn-warning" data-dismiss="modal" id="rateOrder">評價訂單</button>
            <button type="button" className="btn btn-success" id="ordermodalok">確定</button>
          </div>
        </div>
      </div>
    </div>



  </>);
}

export default AdminOrder;