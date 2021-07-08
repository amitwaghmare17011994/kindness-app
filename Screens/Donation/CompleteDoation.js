import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppLayout from '../../components/AppLayout';
import PageHeader from '../../components/PageHeader';
import {useNavigation} from '@react-navigation/native';
import RoundButton from '../../components/RoundButton';
import InputField from '../../components/Input';
import {Radio, Switch, Textarea} from 'native-base';
import questionmark from '../../assets/images/que.png';
import TextAreaField from '../../components/RoundButton/TextAreaField';
import { StripPanel } from '../StripProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

const CompleteDonation = ({donationPrice, onBack}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();

  return (
    <AppLayout>
      <View>
        <View style={{marginTop: 10}}>
          <PageHeader onBack={onBack}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Complete Your Donation
            </Text>
          </PageHeader>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 14,
            }}>
            Proceed with your donation of ${donationPrice}
          </Text>
        </View>
        <View style={styles.body}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#ccc',
              paddingBottom: 20,
            }}>
            <Text style={{color: '#2F7A80', fontSize: 16, marginBottom: 10}}>
              Billing Details
            </Text>
            <View style={styles.row}>
              <InputFieldWithLabel label="First Name" />
              <InputFieldWithLabel label="Last Name" />
            </View>
            <View>
              <Text style={styles.inputLabel}>Address</Text>
              <InputField customStyles={styles.input} />
            </View>
            <View style={styles.row}>
              <InputFieldWithLabel label="City" />
              <InputFieldWithLabel label="Zip/Postal Code" />
            </View>
            <View style={styles.row}>
              <InputFieldWithLabel label="Province/State" />
              <InputFieldWithLabel label="Country" />
            </View>

            <Text
              style={{
                color: '#2F7A80',
                fontSize: 16,
                marginTop: 10,
                marginBottom: 10,
              }}>
              Payment
            </Text>
            <SafeAreaView>
              <StripPanel/>
            </SafeAreaView>
            <View style={styles.row}>
              <RoundButton
                onPress={() => navigation.navigate('Home')}
                customStyles={styles.signUpButton}>
                <Text>CANCEl</Text>
              </RoundButton>
              <RoundButton
                onPress={() => navigation.navigate('Home')}
                customStyles={styles.signUpButton}>
                <Text>DONATE</Text>
              </RoundButton>
            </View>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

const InputFieldWithLabel = ({label, ...props}) => {
  return (
    <View style={{width: '50%'}}>
      <Text style={styles.inputLabel}>{label}</Text>
      <InputField {...props} customStyles={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpButton: {
    width: '40%',
    marginTop: 10,
  },
  body: {
    padding: 10,
  },
  input: {
    height: 31,
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default CompleteDonation;
