import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SOCIAL_MEDIA = [
    "twitter",
    "linkedin",
    "instagram",
    "facebook"
]


const AppFooter = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.socialMediaSection}>
                {SOCIAL_MEDIA.map((media, index) =>
                    <View style={{...styles.socialMedia, marginTop: index === 0 ? 0 : 10}} key={media}>
                        <Icon name={media} />
                    </View>)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#357B7F',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    socialMediaSection: {
        marginLeft: 10,
    },
    socialMedia: {
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#357B7F',
        marginTop: 10
    }
})
export default AppFooter
