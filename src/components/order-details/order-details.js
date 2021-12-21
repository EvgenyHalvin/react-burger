import React from "react";
import orderStyles from "./order-details.module.css";
import done from "../../images/done.png";

import { useSelector } from "react-redux";

function OrderDetails() {
  const { orderDetails } = useSelector((store) => store.order);

  return (
    <div className={orderStyles.order}>
      <h1 className={`${orderStyles.title} text text_type_digits-large`}>
        {orderDetails && orderDetails.order.number}
      </h1>
      <p className={`${orderStyles.orderText} text text_type_main-medium`}>{orderDetails && orderDetails.name}</p>
      <img className={orderStyles.image} src={done} alt="Заказано!" />
      <p className={`${orderStyles.orderText} ${orderStyles.text_wait} text text_type_main-default`}>
        Ваш заказ начали готовить
      </p>
      <p className={`${orderStyles.orderText} ${orderStyles.text_start}text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
