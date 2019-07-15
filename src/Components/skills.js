import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{this.props.skill}</div>
                <ProgressBar style={{ margin: 'auto 0 auto auto', width: this.props.width || '70%' }} progress={this.props.progress}></ProgressBar>
            </div >


        )
    }
}


export default Skills