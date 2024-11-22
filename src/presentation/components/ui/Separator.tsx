import { StyleProp, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
    return (
        <View style={{
            backgroundColor: colors.cardBackground
        }}>
            <View style={[
                {
                    alignSelf: 'center',
                    marginVertical: 5,
                    width: '90%',
                    height: 1,
                    backgroundColor: colors.text,
                    opacity: 0.1
                },
                style
            ]} />
        </View>
    )
}