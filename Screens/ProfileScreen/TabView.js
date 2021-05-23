import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileListItem from './ProfileListItem';
const TABS = ['ACTS', 'LIKES', 'FOLLOWING'];

const TabView = () => {
  const [selectedTab, setSelectedTab] = useState('ACTS');

  return (
    <View>
      <View style={styles.tabs}>
        {TABS.map(i => (
          <Text
            onPress={() => setSelectedTab(i)}
            style={{
              ...styles.tab,
              ...(i === selectedTab ? styles.selectedTab : {}),
            }}>
            {i}
          </Text>
        ))}

        <Text
          onPress={() => setSelectedTab('BisOO')}
          style={{
            ...styles.tab,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
            ...(selectedTab === 'BisOO' ? styles.selectedTab : {}),
          }}>
          BisOO
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        {Array(20)
          .fill()
          .map(() => (
            <View>
            <ProfileListItem />
            <View style={{borderWidth:1,height:1,borderColor:'#cccccc'}}/>
            </View>

          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedTab: {
    borderBottomWidth: 3,
  },
  tab: {
    borderBottomWidth: 1,
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  tabs: {
    flexDirection: 'row',
  },
});

export default TabView;
