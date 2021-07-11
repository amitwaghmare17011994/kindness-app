import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppLayout from '../../components/AppLayout';
import Container from '../../components/Container';
import RoundButton from '../../components/RoundButton';
import AddOns from './AddOns';
import DatesInfo from './DatesInfo';
import DesignInfo from './DesignInfo';
import InfoForm from './InfoForm';
import {useCreatePost} from './../../hooks/useCreatePost';
import CartDrawer from '../../components/CartDrawer/CartDrawer';
import {useSelector} from 'react-redux';
import {updateRawData} from '../../Reducers/actions';

const PurchaseBisooScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();
  const useCreatePostProps = useCreatePost('bisoo');
  const rawData = useSelector(state => state.rawData);

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <AppLayout>
      <Container style={{paddingTop: 60}}>
        <CartDrawer />

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
          {currentStep === 1 && (
            <InfoForm useCreatePostProps={useCreatePostProps} />
          )}
          {currentStep === 2 && (
            <DesignInfo useCreatePostProps={useCreatePostProps} />
          )}
          {currentStep === 3 && (
            <DatesInfo useCreatePostProps={useCreatePostProps} />
          )}
          {currentStep === 4 && (
            <AddOns useCreatePostProps={useCreatePostProps} />
          )}
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, zIndex: 1}}>
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
                navigation.navigate('CheckoutScreen');
                return;
              }
              setCurrentStep(currentStep + 1);
            }}
            customStyles={{
              flex: 1,
              height: 30,
              backgroundColor: '#2F7A80',
              marginLeft: 10,
            }}>
            <Text style={{color: 'white'}}>
              {currentStep === 4 ? 'PROCEED TO CHECKOUT' : 'NEXT'}
            </Text>
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
