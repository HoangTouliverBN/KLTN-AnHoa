import { React, useState } from 'react';

import './ShoppingCart.scss';

const ShoppingCart = () => {
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(0);
  const [arrTotalPrice, setArrTotalPrice] = useState([]);
  const cart = [
    {
      id: 0,
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
      price: 25000,
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 1,
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
      price: 35000,
      quantity: 0,
      totalPrice: 0,
    },
  ];
  const arr = [];
  for (let i; i < cart.length; i++) {
    arr[i] = 1;
  }
  const handleArrTotalPrice = (value, id) => {
    const arrNew = [];
    arr[id] = value;
    arrNew.push(arr);
    setArrTotalPrice(arrNew);
  };
  console.log(arrTotalPrice);
  return (
    <div className="shopping-cart">
      <div className="header">
        <div className="container">
          <h3>Dự án</h3>
          <p>
            Bạn đang ở: Trang chủ / <span className="active">Giỏ hàng</span>
          </p>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
          {cart.map((item, key) => (
            <tr key={key}>
              <td className="col-3">
                <div>
                  <img className="image-cart" src={item.image} alt="" />
                </div>
              </td>
              <td className="col-2">
                <div>Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1</div>
              </td>
              <td className="col-2">
                <div>{item.price.toLocaleString(undefined, { maximumFractionDigits: 3 })}</div>
              </td>
              <td className="col-2">
                <div>
                  <input
                    type="number"
                    // value={quantity}
                    onChange={() => {
                      item.quantity = event.target.value;
                      item.totalPrice = event.target.value * item.price;
                      // arr[item.id] = item.totalPrice;
                      handleArrTotalPrice(item.totalPrice, item.id);
                      // console.log(cart);
                    }}
                  />
                </div>
              </td>
              <td className="col-2">
                <div>{arrTotalPrice[item.id]}</div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
