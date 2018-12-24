import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PaymentPage extends Component {
  static defaultProps = {
    onPayment: () => {},
  };

  componentDidMount() {
    const options = {
      key: 'rzp_test_kjnVgFQVRTpe1M',
      amount: 40000, // 2000 paise = INR 20
      name: 'PWA-Razorpay',
      description: 'Testing Razorpay Netbanking',
      image: 'https://dummyimage.com/216x198/000/fff',
      handler: this.onPaymentCallback.bind(this),
      prefill: {
        name: 'Gaurav Kumar',
        email: 'test@test.com',
        contact: '8002863638',
      },
      notes: {
        address: 'Hello World',
      },
      theme: {
        color: '#004acd',
      },
      modal: {
        ondismiss: this.onDismissPaymentModal,
      },
      callback_url: 'https://www.google.com/', // This is for testing
      redirect: 'True',
    };
    this.razorPay = new Razorpay(options); // eslint-disable-line
    this.razorPay.open();
  }

  onDismissPaymentModal = () => {
    this.props.history.push('/');
  };

  onPaymentSuccess = () => {
    this.props.history.push('/confirm-payment');
  };

  onPaymentCallback = response => {
    const { onPayment } = this.props;

    onPayment(response);
    const request = {
      razorpay_payment_id: response.razorpay_payment_id,
      transaction_id: '1',
      session_token: 'sample_token',
    };
    // Send payment response to backend Server
    // And run onPaymentSuccess on that API Success
    this.onPaymentSuccess();
  };

  retryPayment = () => {
    this.razorPay.open();
  };

  render() {
    return <div>This is Razorpay Page</div>;
  }
}

export default withRouter(PaymentPage);
