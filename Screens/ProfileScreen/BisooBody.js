import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Picker, Icon} from 'native-base';
import { GetBisooCard } from './../PurchaseBisooScreen/DisgnInfoComponents/GetBisooCard';

export const BisooBody = ({bisooList}) => {
  const [selectedBisoo, setSelectedBisoo] = useState(bisooList[0]);

  const BisooDetails = () => {
    return (
      <View style={styles.bisooDetailsBg}>
        <Text style={styles.title}>{selectedBisoo.post_name}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View>
            {[
              {label: 'Signatures', value: '10/100'},
              {label: 'Likes', value: '10/100'},
              {label: 'Comments', value: '10/100'},
              {label: 'Shared', value: '10/100'},
              {label: 'Closing', value: '10/100'},
            ].map(({label, value}, index) => (
                <View key={index} style={styles.bisooDetailsRow}>
                    <Text style={{color: '#337A7F', paddingLeft: 5}}>{value}</Text>
                    <Text style={{fontSize: 12}}>{label}</Text>
                </View>
            ))}
          </View>
          <View>
              <GetBisooCard post={selectedBisoo}/>
          </View>
          <View></View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <BisooDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  bisooDetailsBg: {
    backgroundColor: '#C8DCD240',
    height: 200,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bisooDetailsRow: {
      flexDirection: 'row-reverse',
      marginTop: 5,
      marginBottom: 5,
  }
});
