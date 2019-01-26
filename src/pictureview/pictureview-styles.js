import { StyleSheet } from 'react-native'

export function createStyles (theme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
        button: {
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        pictureWrapper: {
            position: 'absolute',
            top: 0, bottom: 0, left: 0, right: 0
        },
        loadingIndicator: {
            flex: 1,
            justifyContent: 'center'
        },
        picture: {
            flex: 1,
            resizeMode: 'contain'
        }
    })
}
