import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import { colors } from '../../../config/theme/theme'

export const PullToRefreshScreen = () => {
    const [isRereshing, setIsRereshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRereshing(true);

        setTimeout(() => {
            setIsRereshing(false)
        }, 3000);
    }

    return (
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
    )
}