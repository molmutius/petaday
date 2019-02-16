import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Image, Share, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { createStyles } from './home-screen-styles'
import ButtonWithStyle from './button-with-style'

class PictureView extends React.Component {
    static propTypes = {
        error: PropTypes.object,
        fetching: PropTypes.bool,
        navigation: PropTypes.object,
        onRequestPicture: PropTypes.func,
        picture: PropTypes.string
    }

    static navigationOptions = { header: null }

    constructor (props) {
        super(props)
        this.styles = createStyles()
        this.state = {
            loadingFinished: false
        }

        this.renderImage = this.renderImage.bind(this)
        this.onLoadingFinished = this.onLoadingFinished.bind(this)
        this.requestPicture = this.requestPicture.bind(this)
        this.onPressPicture = this.onPressPicture.bind(this)
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

                { this.renderInfoWrapper() }
            </View>
        )
    }

    async onShare (picture) {
        try {
            const result = await Share.share({
                message: 'Hey, have a look at the picture I found on pet-a-day: ' + picture,
                dialogTitle: 'Share that pet'
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                // shared with activity type of result.activityType
                }
                else {
                // shared
                }
            }
            else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        }
        catch (error) {
            alert(error.message)
        }
    }

    renderInfoWrapper () {
        const { picture } = this.props.picture
        const buttonStyle = this.styles.infoButton
        return (
            <View style={this.styles.infoWrapper}>
                <View style={this.styles.infoButtonContainer}>
                    <ButtonWithStyle
                        disabled={!this.state.loadingFinished}
                        style={buttonStyle}
                        onPress={this.requestPicture}
                        title='Another pet' />
                    <ButtonWithStyle
                        disabled={!this.state.loadingFinished}
                        style={buttonStyle}
                        onPress={this.onShare.bind(this, picture)}
                        title='Share' />
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
            <TouchableHighlight style={this.styles.picture} onPress={this.onPressPicture}>
                <Image
                    resizeMode='cover'
                    style={this.styles.picture}
                    onLoad={this.onLoadingFinished}
                    source={{ uri: picture }} />
            </TouchableHighlight>
        )
    }

    onPressPicture () {
        this.props.navigation.navigate('Detail')
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
