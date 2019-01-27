import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { createStyles } from './detail-screen-styles'

class DetailScreen extends React.Component {
    static propTypes = {
        picture: PropTypes.string
    }

    constructor (props) {
        super(props)
        this.styles = createStyles()
    }

    render () {
        const { picture } = this.props
        return (
            <View style={this.styles.container}>
                <Text>FULL screen view</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        picture: state.picture
    }
}

export default connect(mapStateToProps, null)(DetailScreen)
