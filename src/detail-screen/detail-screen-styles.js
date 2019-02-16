import { StyleSheet } from 'react-native'

// #fe4a49 • #2ab7ca • #fed766 • #e6e6ea • #f4f4f8

export function createStyles () {
    return StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff'
        },
        picture: {
            flex: 1,
            width: 800,
            height: 2000
        }
    })
}
