
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation'

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }
            ]} />

            <Pressable
                style={{ width: 80, alignItems: 'center', marginTop: 10, borderWidth: 1, padding: 6, borderRadius: 20 }}
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.elastic(2), duration: 750 })
                }}>
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable
                onPress={() => fadeOut({})}
                style={{ width: 80, alignItems: 'center', marginTop: 10, borderWidth: 1, padding: 6, borderRadius: 20 }}
            >
                <Text>FadeOut</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})