import React, {Component} from 'react';
import { Toast } from 'antd-mobile';

export default class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            msg: '我是home页面'
        }
    }

    //methods
    componentDidMount() {
        console.log('home');
        Toast.info('home', 2, null, false);
    }

    render() {
        return(
            <div>
                <p>{this.state.msg}</p>
            </div>
        )
    }
    
}