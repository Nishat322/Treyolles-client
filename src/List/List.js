import React, { Component } from 'react';

import Card from '../Card/Card'

import './List.css'


class List extends Component {
    render(){
        return(
            <div className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map((card) =>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onDeleteCard={this.props.onDeleteCard}
                    />
                    )}
                    <button
                    type='button'
                    className='List-add-button'
                    onClick={() => this.props.onAddCard(this.props.id)}
                    >
                    + Add Random Card
                    </button>
                </div>
            </div>
        )
    }
}

List.defaultProps = {
    onAddCard: () => {},
}
 
export default List

