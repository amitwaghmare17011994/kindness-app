import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ProfileListItem = () => {
  return (
    <View>
      <View style={styles.row}>
        <View style={{flex: 1,marginTop:5}}>
          <Text style={{...styles.blur}}>ErinDobson</Text>
          <Text style={styles.blur}>Vancouver, BC</Text>
        </View>
        <Text style={styles.blur}>15 mins ago</Text>
        <Icon name="dots-three-vertical" />
      </View>
      <Text style={{fontWeight: '700', marginTop: 5}}>
        I’ve been bringing my dog over to my downstairs neighbour to help him
        feel less isolated, he told me it’s the best part of his day!
      </Text>
      <View style={{flexDirection: 'row-reverse', marginTop: 5}}>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Icon name="chat" size={16} />
          <Text style={{fontSize: 12}}>185</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Icon name="heart" size={16} />
         </View>

        <View style={{flexDirection: 'row'}}>
          <Icon name="arrow-long-up" size={16} />
          <Text style={{fontSize: 12}}>185</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blur: {
    opacity: 0.6,
    color: 'black',
    fontSize: 12,
  },
});
export default ProfileListItem;
