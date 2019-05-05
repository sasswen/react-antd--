import React, {Component} from 'react';

export default class Detail extends Component{
    constructor(props) {
        super(props);

        this.state = {
            msg: '我是detail页面'
        }
    }

    //methods
    componentDidMount() {
        console.log('detail');
    }

    render() {
        return(
            <div>
                <p>{this.state.msg}</p>
            </div>
        )
    }
    
}