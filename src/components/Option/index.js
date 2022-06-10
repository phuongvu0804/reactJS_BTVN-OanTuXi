import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddOption } from './../../redux/actions'
import styles from './Option.module.css'

class Option extends Component {
    constructor(props) {
        super(props)
        this.option= React.createRef()
    }
    handleAddOption = optionName => {
        const { addOption } = this.props
        switch (optionName) {
            case 'keo':
                addOption(0)
                break;
            case 'bua':
                addOption(1)
                break;
            case 'bao':
                addOption(2)
                break;
            default:
                throw new Error(`Unknown option`)
        }
    }

    render() { 
        const { name } = this.props
        return (
            <img
                ref={this.option}
                className={styles.optionImg} 
                src={`./assets/images/${name}.png`}
                onClick={() => this.handleAddOption(name)}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOption: payload => dispatch(actAddOption(payload))
    }
}

export default connect(null, mapDispatchToProps)(Option);