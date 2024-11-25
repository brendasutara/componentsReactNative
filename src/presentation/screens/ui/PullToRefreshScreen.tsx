import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {
    const [isRereshing, setIsRereshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRereshing(true);

        setTimeout(() => {
            setIsRereshing(false)
        }, 3000);
    }

    const { colors } = useContext(ThemeContext)

    return (
        <CustomView>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isRereshing}
                    progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    onRefresh={onRefresh}
                />
            }>
                <CustomView margin>
                    <Title text='Pull to refresh' safe />
                </CustomView>
            </ScrollView>
        </CustomView>
    )
}