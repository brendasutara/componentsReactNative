import prompt from 'react-native-prompt-android';
import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext)

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );

    //no funciona en android pero si en IOS
    const onShowPrompt = () => {
        showPrompt({
            title: 'Escribe tu nombre',
            subTitle: 'Enter your password to claim your $1.5B in lottery winnings',
            buttons: [
                { text: 'Cancel', onPress: () => console.log('Cancel') },
                { text: 'OK', onPress: () => console.log('ok') },

            ],
            placeholder: 'Ingresa tu nombre'
        })
    }



    return (
        <CustomView margin>
            <Title safe text='Alertas' />

            <Button
                text='Alerta - 2 botones'
                onPress={createTwoButtonAlert} />

            <View style={{ height: 10 }} />

            <Button
                text='Alerta - 3 botones'
                onPress={createThreeButtonAlert} />

            <View style={{ height: 10 }} />

            <Button
                text='Prompt - Input'
                onPress={onShowPrompt} />

            <View style={{ height: 10 }} />

        </CustomView>
    )
}