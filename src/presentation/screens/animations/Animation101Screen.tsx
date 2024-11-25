
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation'
import { CustomView } from '../../components/ui/CustomView'
import { Button } from '../../components/ui/Button'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const Animation101Screen = () => {

    const { colors } = useContext(ThemeContext)

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation()

    return (
        <CustomView margin style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        }}>
            <Animated.View style={[
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }],
                    width: 200,
                    height: 200,
                    backgroundColor: colors.primary
                }
            ]} />

            <Button
                text='FadeIn'
                style={{ width: 150, alignItems: 'center', marginTop: 10, padding: 6, borderRadius: 20 }}
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.elastic(2), duration: 750 })
                }} />



            <Button
                text='FadeOut'
                onPress={() => fadeOut({})}
                style={{ width: 150, alignItems: 'center', marginTop: 10, padding: 6, borderRadius: 20 }}
            />


        </CustomView>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         flex: 1,
//         justifyContent: 'center',
//     },
//     purpleBox: {
//         backgroundColor: colors.primary,
//         width: 150,
//         height: 150,
//     }
// })