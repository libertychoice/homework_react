import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Item.css'
import { connect } from 'react-redux';
import { addItem } from '../../actions/basket.action'



class Item extends Component {

    constructor(props){
    super(props);
    this.state = {count:0,

    items:[]};

    }


    onClick = (e)=>{
    console.log(this.props.addItem);
    this.props.addItem(this.state.items);
    this.setState({count:++this.state.count})

    }



    render(){
	const {count} = this.state;
        let data = this.props.items;
        let template = data.map((item,index)=>{
            return(
		<div>
                <li className="t-item">
                    <Button className='btn-base' id={'btn-'+index} onClick={this.onClick}>{item.name}</Button>
                </li>
		
		    <Button>{count}</Button>
		</div>
		
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


export default connect((state)=>{
return {
    t: state.items
};
},
(dispatch)=>{
    return {
    addItem: (item)=>{
    dispatch(addItem(item))
    },
    };
})(Item);



export { Item };