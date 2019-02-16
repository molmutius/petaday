import React, { Component } from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'

class ButtonWithStyle extends Component {
    static propTypes = {
        disabled: PropTypes.bool,
        onPress: PropTypes.func,
        style: PropTypes.object,
        title: PropTypes.string
    }

    render () {
        const { disabled, onPress, style, title } = this.props
        return (
            <View style={style}>
                <Button disabled={disabled} onPress={onPress} title={title} />
            </View>
        )
    }
}

export default ButtonWithStyle
