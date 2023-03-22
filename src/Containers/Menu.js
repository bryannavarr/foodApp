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
  FlatList,
  Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../Store/Theme'
import tw from 'twrnc'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const foodItems = [
  {
    title: 'Breakfast',
    image:
      'https://personal-assets-01.s3.us-west-1.amazonaws.com/bella_round_ornament_954_954.png',
    prepTimeValue: '25 - 30',
    prepTimeUnit: 'min',
    rating: 4.7,
    cat1: 'Deli',
    cat2: 'Bagels',
    range: '$$',
  },
  {
    title: 'Entrees',
    image:
      'https://personal-assets-01.s3.us-west-1.amazonaws.com/bella_round_ornament_954_954.png',
    prepTimeValue: '30 - 35',
    prepTimeUnit: 'min',
    rating: 4.5,
    cat1: 'Cafes',
    cat2: 'Desserts',
    range: '$',
  },
  {
    title: 'Sides',
    image:
      'https://personal-assets-01.s3.us-west-1.amazonaws.com/bella_round_ornament_954_954.png',
    prepTimeValue: '40 - 60',
    prepTimeUnit: 'min',
    rating: 4.6,
    cat1: 'Barbecue',
    cat2: 'Chicken',
    range: '$$$',
  },
  {
    title: 'Beverages',
    image:
      'https://personal-assets-01.s3.us-west-1.amazonaws.com/bella_round_ornament_954_954.png',
    prepTimeValue: '40 - 60',
    prepTimeUnit: 'min',
    rating: 4.6,
    cat1: 'Barbecue',
    cat2: 'Chicken',
    range: '$$$',
  },
]

const Menu = () => {
  const dispatch = useDispatch()

  const [menuItems, setMenuItems] = useState(foodItems)

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const styles = StyleSheet.create({
    container: tw`p-2`,
    view1: tw`p-2`,
    listItemContainer: tw`grid grid-cols-4 gap-4 overflow-hidden h-56 mt-1 rounded rounded-xl text-black border bg-slate-400`,
    list: tw`w-full mt-2 mb-3 text-blue-800`,
    listItemText: tw`font-bold text-3xl pt-6 text-white mb-6`,
    icon: tw`mx-auto my-auto mr-3`,
    image: tw`h-50 w-50 my-3`,
    view2: {
      flexDirection:'row', alignItems:'center', justifyContent: 'flex-start'
    },
  })

  return (
    <View style={styles.view1}>
      <FlatList
        style={styles.list}
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItemContainer}>
            <View style={styles.view2}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <Text style={styles.listItemText}>{item.title}</Text>
              <ChevronRightIcon style={styles.icon} size={50} color={'white'} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Menu
