import React from 'react'
import StripeCheckout from "react-stripe-checkout"
export default function Payment() {

    return (
        // 这个component的写法是stripe规定的照着写就行了
        <div>
             {/* 自动生成pay with card 的按钮 */}
            <StripeCheckout
                name="put product name here"
                description="$5 for sending 5 email"
                // 500美分就是5美元
                amount={500}
                //点击付款之后，会打印一个付款object，这个object就是stripe发送过来的token。
                token={token=>console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <button className="btn">
                    payment
                </button>
            </StripeCheckout>
        </div>
    )
}
