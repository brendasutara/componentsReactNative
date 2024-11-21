import { Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor: string;
}

export const SubTitle = ({ text, safe, backgroundColor }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor
        }}>{text}</Text>
    )
}