import React from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { createStyles } from './detail-screen-styles'
import ZoomableImage from '../zoomable-image'
import PinchZoomView from 'react-native-pinch-zoom-view'

class DetailScreen extends React.Component {
    static propTypes = {
        picture: PropTypes.string
    }

    static navigationOptions = { header: null }

    constructor (props) {
        super(props)
        this.styles = createStyles()
        // Set initially to 1 to work around NaN issues
        this.state = {
            width: 1,
            height: 1
        }
    }

    componentDidMount () {
        Image.getSize(this.props.picture, (width, height) => {
            this.setState({
                width: width * 2,
                height: height * 2
            })
        })
    }

    render () {
        const { picture } = this.props
        // return (
        //     <ScrollView horizontal={false}>
        //         <ScrollView horizontal={true}
        //             contentContainerStyle={this.styles.container}>
        //             {
        //                 <Image
        //                     resizeMode='cover'
        //                     style={this.styles.picture}
        //                     onLoad={this.onLoadingFinished}
        //                     source={{ uri: picture }} />
        //             }
        //         </ScrollView>
        //     </ScrollView>
        // )
        // return (
        //     <View style={{ width: 1000, height: 2000 }}>
        //         <ZoomableImage
        //             source={{ uri: picture }}
        //             imageHeight={this.state.width}
        //             imageWidth={this.state.height} />
        //     </View>
        // )
        return (
            <PinchZoomView>
                <Image
                    resizeMode='contain'
                    style={this.styles.picture}
                    onLoad={this.onLoadingFinished}
                    source={{ uri: picture }} />
            </PinchZoomView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        picture: state.picture
    }
}

export default connect(mapStateToProps, null)(DetailScreen)
