import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Item.css'


class Item extends Component {

    render(){
        let data = this.props.items;
        let template = data.map((item,index)=>{
            return(
                <li className="t-item">
                    <Button className='btn-base' id={'btn-'+index}>{item.name}</Button>
                </li>
            )
        })

        return (

            <div className="container-fluid">
            <div className="row">
                <ul class="t-nav">
                {template}
                </ul>
            </div>
            </div>
        )
    }
}

export default Item;