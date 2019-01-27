import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { createStyles } from './home-screen-styles'

class PictureView extends React.Component {
    static propTypes = {
        error: PropTypes.object,
        fetching: PropTypes.bool,
        onRequestPicture: PropTypes.func,
        picture: PropTypes.string
    }

    constructor (props) {
        super(props)
        this.styles = createStyles()
        this.state = {
            loadingFinished: false
        }

        this.renderImage = this.renderImage.bind(this)
        this.onLoadingFinished = this.onLoadingFinished.bind(this)
        this.requestPicture = this.requestPicture.bind(this)
        this.onLoadingFinished = this.onLoadingFinished.bind(this)
    }

    componentDidMount () {
        this.requestPicture()
    }

    render () {
        const { fetching, picture, error } = this.props
        return (
            <View style={this.styles.container}>
                <View style={this.styles.pictureWrapper}>
                    { error &&
                        <Text style={this.styles.welcomeText}>Uh oh - Something went wrong ...</Text>
                    }

                    { picture && !fetching &&
                        this.renderImage()
                    }

                    { !this.state.loadingFinished &&
                        this.renderLoadingIndicator()
                    }
                </View>

                <View style={this.styles.infoWrapper}>
                    { !this.state.loadingFinished
                        ? (<Button disabled style={this.styles.button} title='Loading ...' />)
                        : (<Button onPress={this.requestPicture} style={this.styles.button} title='Another pet' />)
                    }
                </View>
            </View>
        )
    }

    requestPicture () {
        this.setState({ loadingFinished: false })
        this.props.onRequestPicture()
    }

    renderImage () {
        const { picture } = this.props
        return (
            <Image
                resizeMode='cover'
                onLoad={this.onLoadingFinished}
                style={this.styles.picture}
                source={{ uri: picture }} />
        )
    }

    renderLoadingIndicator () {
        return (
            <View style={this.styles.loadingIndicator}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        )
    }

    onLoadingFinished () {
        this.setState({ loadingFinished: true })
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        picture: state.picture,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPicture: () => dispatch({ type: 'API_CALL_REQUEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureView)
