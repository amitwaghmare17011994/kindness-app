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
import CompleteDonation from './CompleteDoation';

const disabledRadioProps  = {
  color: '#ccc',
}

const DonationScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [donationPrice, setDonationPrice] = useState(0)
  const [donationType, setDonationType] = useState(0)
  const [otherAmountFlag, setOtherAmountFlag] = useState(0)
  const [step, setStep] = useState(0)


  if (step) return <CompleteDonation donationPrice={donationPrice} onBack={() => setStep(0)} />

  const InputHelper = ({helerText}) => (
    <View style={{...styles.row, marginTop: 10}}>
      <Image style={{width: 20, height: 20}} source={questionmark} />
      <Text style={{color: '#aaa', fontSize: 12}}>{helerText}</Text>
    </View>
  );

  const chooseMonthlyDonationRadioProps = !donationType ? {selected: true} : disabledRadioProps;
  const chooseOneDonationRadioProps = donationType ? {selected: true} : disabledRadioProps;


  return (
    <AppLayout>
      <View>
        <View style={{marginTop: 10}}>
          <PageHeader
            onBack={() => navigation.navigate('Home')}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontWeight: '600',
                fontSize: 16,
              }}>
              Your Donations are an Act of Kindness
            </Text>
          </PageHeader>
        </View>
        <View style={styles.body}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#ccc',
              paddingBottom: 20,
            }}>
            <Text style={{color: '#2F7A80', fontSize: 16, marginBottom: 10}}>
              Choose Donation
            </Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Radio {...chooseMonthlyDonationRadioProps}/>
                <Text>Monthly Donation</Text>
              </View>
              <View style={styles.paymentRow}>
                {[25, 50, 100].map((item, index) => {
                  return (
                    <Text
                      onPress={() => setDonationPrice(item)}
                      style={{...styles.priceBox, ...(!donationType && donationPrice === item ? styles.activePriceBox : {})}} key={index}>
                      ${item}
                    </Text>
                  );
                })}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  paddingLeft: '10%',
                }}>
                <Radio />
                <Text style={{marginRight: 20}}>Other Amount</Text>
                <InputField
                  customStyles={{height: 31, fontSize: 10}}
                  placeholder="Other Amount"
                />
              </View>
            </View>
            <View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Radio />
                  <Text>One Time Donation</Text>
                </View>
                <View style={styles.paymentRow}>
                  {[25, 50, 100].map((item, index) => {
                    return (
                      <Text
                        onPress={() => setDonationPrice(item)}
                        style={{...styles.priceBox, ...(donationType && donationPrice === item ? styles.activePriceBox : {})}}
                        key={index}
                      >
                        ${item}
                      </Text>
                    );
                  })}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    paddingLeft: '10%',
                  }}>
                  <Radio/>
                  <Text style={{marginRight: 20}}>Other Amount</Text>
                  <InputField
                    customStyles={{height: 31, fontSize: 10}}
                    placeholder="Other Amount"
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#2F7A80',
                fontSize: 16,
                marginBottom: 5,
                marginTop: 20,
              }}>
              Choose Donation
            </Text>
            <Text>
              We would like to post a Thank You Pin on the map to thank you for
              your gratitude. No private or monetary information will be shared.{' '}
            </Text>
            <View style={{marginTop: 20, marginBottom: 20}}>
              <Text style={styles.inputLabel}>Name</Text>
              <InputField
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                customStyles={styles.input}
              />
              <InputHelper helerText="Please indicate who we will dedicate our Thank You Pin to" />
              <Text style={styles.inputLabel}>Location</Text>
              <InputField
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                customStyles={styles.input}
              />
              <InputHelper helerText="This is where we will drop the pin to represent where the donations from" />
              <Text style={styles.inputLabel}>Message</Text>
              <TextAreaField
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <InputHelper helerText="Add a message we will include with the Thank You Pin" />
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, flex: 1}}>
                  Post Anonymously
                </Text>
                <Switch size="lg" value={true} />
              </View>
              <RoundButton
                onPress={() => setStep(1)}
                customStyles={styles.signUpButton}>
                <Text>Next</Text>
              </RoundButton>
            </View>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  input: {
    height: 32,
    fontSize: 12,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  signUpButton: {
    width: '100%',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  paymentRow: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  priceBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 20,
    borderWidth: 0.3,
  },
  activePriceBox: {
    backgroundColor: '#FFC6B2'
  }
});

export default DonationScreen;