import React, { Component } from 'react'
import styles from './OptionList.module.css'
import Option from './../Option'

class OptionList extends Component {
    render() { 
        return (
            <div className={styles.container}>
            <Option name="keo"/>
            <Option name="bua"/>
            <Option name="bao"/>
        </div>
        );
    }
}
 
export default OptionList;