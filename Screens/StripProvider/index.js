import React, {useEffect, useState} from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {doPost} from '../../services/request'
import RoundButton from './../../components/RoundButton/index';

export const PaymentScreen = () => {
  const {confirmPayment} = useStripe();
  const [clientSecrete, setClientSecrete] = useState();

  useEffect(() => {
    doPost('create-payment-intent',  {amount: 200 }).then((res) => {
        const secrete = res.clientSecret;
        console.warn(secrete);
        setClientSecrete(secrete)
    })
  }, []);

  const handlePayment =  async () => {
      console.log(clientSecrete);
    const {error} = await confirmPayment(
        clientSecrete, 
        {
            type: 'Card',
            billingDetails: {
                name: 'Gajesh Panigrahi',
                email: 'gajesh@gmail.c'

            }
        }
    )

    if (error) {
        console.warn(error)

        return;

    }

    console.warn('Success')
  }


  return (
    <View style={{width: '100%'}}>
      <Text style={{fontWeight: 'bold'}}>Card Number</Text>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
          cardStyle={ {
            borderWidth: .3,
            backgroundColor: '#cccccc',
            borderColor: '#000000',
            textColor: '#000000',
            cursorColor: '#000000'
          }}
        style={{
          width: '100%',
          height: 40,
          marginVertical: 10,
          flexDirection: 'column',
          borderWidth: 1
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
      />
      <View>
          <RoundButton onPress={handlePayment}><Text>Pay Now</Text></RoundButton>
      </View>
    </View>
  );
};

export const StripPanel = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51J9xKuSIDB7z7pvSNoQLrDzASYm0SNfqLtDnJn45r2kWJgwkEd4K7YHDUG6kziIgqkAfphAX8ptzG9TG3RVAaJQG00cJgwfdV9"
      merchantIdentifier="merchant.identifier">
          <SafeAreaView>
      <PaymentScreen />
      </SafeAreaView>
    </StripeProvider>
  );
};