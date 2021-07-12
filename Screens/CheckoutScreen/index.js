import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLayout from '../../components/AppLayout';
import Container from '../../components/Container';
import InputField from '../../components/Input';
import RoundButton from '../../components/RoundButton';
import { StripPanel } from '../StripProvider';

const CheckoutScreen = () => {
  const navigation = useNavigation();

  return (
    <AppLayout>
      <Container>
        <Text style={{fontWeight: '600', fontSize: 32}}>
          Purchase Kindness Card
        </Text>
        <Text style={{fontWeight: '600', fontSize: 20}}>
          Purchase Total: $73.00
        </Text>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#2F7A80', fontSize: 30}}>Billing</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}> First Name</Text>
            <InputField />
          </View>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>Last Name</Text>

            <InputField />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>Address</Text>
            <InputField />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>City</Text>
            <InputField />
          </View>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>Zip/Postal Code</Text>
            <InputField />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>Province/State</Text>
            <InputField />
          </View>
          <View style={{flex: 1}}>
            <Text style={{marginBottom: 10}}>Country</Text>
            <InputField />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: '#2F7A80', fontSize: 30}}>Payment</Text>
        </View>
        <View style={{height: 80, paddingLeft: 10, paddingRight: 10}}>

        <SafeAreaView>
              <StripPanel/>
            </SafeAreaView>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <RoundButton
            onPress={() => {
              navigation.goBack();
            }}
            customStyles={{flex: 1, height: 30}}>
            <Text>BACk</Text>
          </RoundButton>
          <RoundButton
            onPress={() => {
              navigation.navigate('PurchaseDetailsScreen');
            }}
            customStyles={{
              flex: 1,
              height: 30,
              //   backgroundColor: '#2F7A80',
              marginLeft: 10,
            }}>
            <Text style={{color: 'black'}}>CHECKOUT</Text>
          </RoundButton>
        </View>
      </Container>
    </AppLayout>
  );
};

export default CheckoutScreen;
