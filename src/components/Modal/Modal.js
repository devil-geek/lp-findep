import React, { Component } from 'react'

class Modal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: ''
    }
  }
  
  showModal = () => {
    this.setState({
      modal: ' is-active'
    })
  }

  hideModal = () => {
    this.setState({
      modal: ''
    })
  }

  render () {
    return (
      <div>
        <div className={"modal " + this.state.modal}>
          <div className="modal-background" onClick={this.hideModal}></div>
          <div className={"modal-card " + this.props.class}>
            <header className="modal-card-head">
              <p className="modal-card-title is-size-4">{this.props.title}</p>
              <button className="delete" aria-label="close" onClick={this.hideModal}></button>
            </header>
            <section className="modal-card-body">
              {this.props.children}
            </section>
          </div>
          </div>
      </div>
    )
  }
}

export default Modal
