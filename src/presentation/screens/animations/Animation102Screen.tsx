import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomView } from '../../components/ui/CustomView';

export const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });

    return (
        <SafeAreaProvider>
            <CustomView margin style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={[pan.getLayout(), styles.box]}
                />
            </CustomView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#61dafb',
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});