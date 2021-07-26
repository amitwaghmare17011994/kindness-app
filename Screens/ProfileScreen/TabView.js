import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileListItem from './ProfileListItem';
import {groupBy} from './../../utils/index';
import {usePost} from './../../hooks/usePost';
import {BisooBody} from './BisooBody';
import {useSelector} from 'react-redux';
const TABS = ['ACTS', 'LIKES', 'FOLLOWING'];

const TabView = React.memo(() => {
  const [selectedTab, setSelectedTab] = useState('ACTS');
  const userDetails = useSelector(state => state.rawData.userDetails) || {};

  console.log(`userDetails`, userDetails);

  const {loading, postList, error} = usePost(userDetails.id);
  const {bisoo = [], act = []} = groupBy(postList, ({post_type}) => post_type);

  let body = '';

  switch (selectedTab) {
    case 'ACTS':
      body = act.map(post => (
        <View key={post.post_id}>
          <ProfileListItem post={post} />
          <View style={{borderWidth: 1, height: 1, borderColor: '#cccccc'}} />
        </View>
      ));
      break;

    case 'BisOO':
      body = <BisooBody bisooList={bisoo} />;
      break;

    default:
      break;
  }

  return (
    <View>
      <View style={styles.tabs}>
        {TABS.map(i => (
          <Text
            index={i}
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
      <View style={{marginTop: 10}}>{body}</View>
    </View>
  );
});

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
