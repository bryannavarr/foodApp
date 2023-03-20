import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '../Components'
import { useTheme } from '../Hooks'
import { changeTheme } from '../Store/Theme'
import tw from 'twrnc'

const Menu = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const styles = StyleSheet.create({
    button: tw`bg-blue-500 text-white`,
  })

  return (
    <ScrollView
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
        className="flex-1 items-center justify-center bg-white"
      >
        <Text style={tw`font-bold text-xl p-10 text-white`}>
          This is the menu page.
        </Text>
        <TouchableOpacity
          style={tw`bg-indigo-500 font-bold rounded-full py-4 px-8 shadow-lg uppercase text-white`}
        >
          <Text style={tw`text-white`}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Menu
