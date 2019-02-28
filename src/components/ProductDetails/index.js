import React, { Component } from "react";
import Modal from 'react-modal';
import CloseModal from 'react-icons/lib/fa/close';
import Tabs from '../Tabs';

import './product-details.css';

// Modal.setAppElement('#yourAppElement')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 25, 0.8)',
  },
  content : {
    top: '0',
    left: '48vw',
    height: '100vh',
    width: '50vw',
  }
};

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isOpen,
      closeModal,
      product,
    } = this.props;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onAfterOpen={() => {}}
          onRequestClose={() => {}}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-header">
            <h2 className="product-details-text">
              Product Details
            </h2>
            <div onClick={closeModal}>
              <CloseModal className="close-modal-icon" />
            </div>
          </div>
          <div>
            <Tabs>
              <div label="Parameters">
                <p>{product.name}</p>
                <p>{product.tenor}</p>
                <p>{product.amount}</p>
              </div>
              <div label="Required Fields">
                After 'while, <em>Crocodile</em>!
              </div>
            </Tabs>
          </div>
          {/* <p>{product.name}</p> */}
        </Modal>
      </div>
    );
  }
}
