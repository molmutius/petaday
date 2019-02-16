import { StyleSheet } from 'react-native'

// #fe4a49 • #2ab7ca • #fed766 • #e6e6ea • #f4f4f8

export function createStyles () {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        welcomeText: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
        pictureWrapper: {
            flexGrow: 3,
            width: '100%',
            backgroundColor: '#f4f4f8'
            // position: 'absolute',
            // top: 0, bottom: 0, left: 0, right: 0
        },
        loadingIndicator: {
            alignSelf: 'center',
            justifyContent: 'center'
        },
        picture: {
            flex: 1
        },
        infoWrapper: {
            flex: 1,
            padding: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fe4a49'
        },
        infoButtonContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
        },
        infoButton: {
            paddingLeft: 5,
            paddingRight: 5
        }
    })
}
