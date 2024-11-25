import { StyleSheet } from 'react-native';
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useState } from 'react';
import { Separator } from '../../components/ui/Separator';
import { Title } from '../../components/ui/Title';

export const SwitchScreen = () => {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    return (
        <CustomView margin>
            <Title safe text='Switches' />
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text='¿Está activo?' />
                <Separator />
                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={(value) => setState({ ...state, isHungry: value })}
                    text='¿Tiene hambre?' />
                <Separator />
                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={(value) => setState({ ...state, isHappy: value })}
                    text='¿Es feliz?' />
            </Card>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});