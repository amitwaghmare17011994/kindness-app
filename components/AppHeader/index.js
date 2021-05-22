import React, {useState} from 'react';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Button} from 'native-base';
import {Text, Image, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Logo from '../../assets/images/logo.png';
import {MENU_ITEMS} from '../../constants';
import {useRef} from 'react';

const AppHeader = props => {
  const {onMenuItemSelected} = props;
  let _menu = null;
  const [toggleMenu, setToggleMenu] = useState(false);

  const setMenuRef = ref => {
    _menu = ref;
  };

  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  return (
    <View style={styles.headerRow}>
      <View style={{flex: 1}}>
        <Image source={Logo} style={styles.img} resizeMode="contain" />
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 20}}>
        <Menu
          style={styles.menuList}
          ref={setMenuRef}
          button={
            <Icon name="menu" size={40} color="#ffcb4c" onPress={showMenu} />
          }>
          <MenuItem>
            <Text>Send a</Text>
            <Text style={{fontWeight: 'bold', flex: 1}}> BisOO</Text>
          </MenuItem>
          {MENU_ITEMS.map(i => (
            <>
              <MenuItem
                onPress={() => {
                  onMenuItemSelected(i);
                  hideMenu();
                }}>
                {i.name}
              </MenuItem>
              <MenuDivider />
            </>
          ))}
        </Menu>

        <View style={{flexDirection: 'row', marginRight: 2}}>
          <Text>Send a </Text>
          <Text>Bisoo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuList: {
    marginTop: 35,
  },
  menuItem: {
    padding: 5,
    paddingLeft: 15,
    paddingTop: 10,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 150,
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  headerRow: {flexDirection: 'row', alignItems: 'center'},
  img: {
    height: 50,
    width: 100,
  },
  menu: {
    marginRight: 20,
  },
  square: {
    backgroundColor: '#f8f9f8',
    height: 120,
    shadowColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default AppHeader;
