import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import AppLayout from '../../components/AppLayout';
import Container from '../../components/Container';
import RoundButton from '../../components/RoundButton';
import AddOns from './AddOns';
import DatesInfo from './DatesInfo';
import DesignInfo from './DesignInfo';
import InfoForm from './InfoForm';

const PurchaseBisooScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <AppLayout>
      <Container>
        <Text style={styles.headerText}> Purchase BisOO </Text>
        <View style={styles.progress}>
          <View
            style={{...styles.progressItem, flex: 0.25 * currentStep}}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.progressStep}>TO/FROM</Text>
          <Text style={styles.progressStep}>DESIGN</Text>
          <Text style={styles.progressStep}>SET DATES & PRIVACY</Text>
          <Text style={styles.progressStep}> ADD ON’S</Text>
        </View>
        <View style={{marginTop: 20}}>
          {currentStep === 1 && <InfoForm />}
          {currentStep === 2 && <DesignInfo />}
          {currentStep === 3 && <DatesInfo />}
          {currentStep === 4 && <AddOns />}
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <RoundButton
            onPress={() => {
              currentStep !== 1 ? setCurrentStep(currentStep - 1) : goBack();
            }}
            customStyles={{flex: 1, height: 30}}>
            <Text>BACk</Text>
          </RoundButton>
          <RoundButton
            onPress={() => {
              if (currentStep == 4) {
                navigation.navigate('Home')
                return
              }
               setCurrentStep(currentStep + 1)
              }}
            customStyles={{
              flex: 1,
              height: 30,
              backgroundColor: '#2F7A80',
              marginLeft: 10,
            }}>
            <Text style={{color: 'white'}}>NEXT</Text>
          </RoundButton>
        </View>
      </Container>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 2,
    width: 22,
    marginTop: 2,
  },

  progressStep: {
    textAlign: 'center',
    alignContent: 'center',
    marginLeft: 10,
    flex: 1,
    color: 'black',
    opacity: 0.6,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
  },
  progress: {
    marginTop: 20,
    borderWidth: 1,
    height: 20,
    borderRadius: 10,
    borderColor: '#cccccc',
    flexDirection: 'row',
  },
  progressItem: {
    borderRadius: 30,
    height: 20,
    backgroundColor: '#C8DCD2',
    flex: 1,
  },
});
export default PurchaseBisooScreen;
