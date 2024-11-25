import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Card } from '../../components/ui/Card'
import { colors, globalStyles } from '../../../config/theme/theme';
import { useContext, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {

    const { colors } = useContext(ThemeContext)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <ScrollView>
                <CustomView margin>
                    <Title safe text='Text Inputs' />
                    <Card>
                        <TextInput
                            style={{
                                ...globalStyles.input,
                                color: colors.text,
                                borderColor: colors.text,
                            }}
                            placeholder='Nombre completo'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />

                        <TextInput
                            style={{
                                ...globalStyles.input,
                                color: colors.text,
                                borderColor: colors.text,
                            }}
                            placeholder='Correo electrónico'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={value => setForm({ ...form, email: value })}
                        />

                        <TextInput
                            style={{
                                ...globalStyles.input,
                                color: colors.text,
                                borderColor: colors.text,
                            }}
                            placeholder='Teléfono'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='phone-pad'
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>

                    <View style={{ height: 20 }} />

                    <Card>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                    </Card>

                    <View style={{ height: 20 }} />

                    <Card>
                        <TextInput
                            style={{
                                ...globalStyles.input,
                                color: colors.text,
                                borderColor: colors.text,
                            }}
                            placeholder='Nombre completo'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>

                    <View style={{ height: 20 }} />

                </CustomView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}