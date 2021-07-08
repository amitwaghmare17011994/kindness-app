import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PaymentScreen = () => {
  const {confirmPayment} = useStripe();

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
            // backgroundColor?: string;
            borderColor: '#000000'
            // borderRadius?: number;
            // textColor?: string;
            // fontSize?: number;
            placeholderColor: #ccc;
            // cursorColor?: string;
            // textErrorColor?: string;
            // fontFamily?: string;
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
