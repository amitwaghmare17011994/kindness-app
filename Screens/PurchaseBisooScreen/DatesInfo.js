import React, {useState, useEffect} from 'react';
import {View, Text, DatePickerAndroid, DatePickerIOS} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../components/Input';
import {RenderCardToShow} from './DesignInfo';
import {DatePicker, Radio} from 'native-base';
import {addUpdatePostMetaAction} from '../../hooks/useCreatePost';
import {updateRawData} from '../../Reducers/actions';

const value = new Date(1598051730000);

export const SelectedCardDetails = ({cardMeta}) => {
  return (
    <View>
      <RenderCardToShow {...cardMeta} />
      <Text style={{fontWeight: 'bold'}}>Your Basic BisOO Includes:</Text>
      <Text style={{fontSize: 12, marginBottom: 5, marginTop: 2}}>
        Up to 5 signatures
      </Text>
      <Text style={{fontSize: 12, marginBottom: 5}}>Generic URL</Text>
      <Text style={{fontSize: 12, marginBottom: 5}}>
        1 Month Live Time beginning on the Start Date
      </Text>
      <Text style={{fontSize: 12, marginBottom: 12}}>
        Delivery to Recipient(s) within the Live Time
      </Text>
    </View>
  );
};

const DatesInfo = ({useCreatePostProps}) => {
  const {state: values, dispatch} = useCreatePostProps;

  const {selectedDate, selectedOption} = values.postMeta;
  const postMeta = values.postMeta;
  const updateMetaData = metaObject =>
    addUpdatePostMetaAction(dispatch, metaObject);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    updateRawData({disableNext: !selectedDate});
  }, []);

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption === 'DATE' && selectedDate) {
        updateRawData({disableNext: false});
      }
    }
  }, [selectedOption, selectedDate]);

  const openCalender = async () => {
    addUpdatePostMetaAction(dispatch, {
      selectedOption: 'DATE',
    });

    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(),

      });
      if (action !== DatePickerAndroid.dismissedAction) {
        addUpdatePostMetaAction(dispatch, {
          selectedDate: new Date(year, month, day),
        });

        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View style={{height: 'auto', paddingBottom: 20}}>
      <SelectedCardDetails cardMeta={postMeta} />
      <View>
        <Text style={{color: '#357B7F', fontSize: 16}}>3 Set Dates</Text>
        <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 12}}>
          Set Your Dates
        </Text>
        <Text style={{fontSize: 12}}>
          This date will be when your BisOO goes live. Once it is live, you can
          start collecting signatures!
        </Text>
        <InputField value="dd/mm/yyyy" />
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 12}}>
            Set Your Start Dates
          </Text>
          <Text style={{fontSize: 12}}>
            This date will be when your BisOO is sent to the recipient(s). You
            can send your BisOO on a certain date (like if you're sending a
            Bisoo for a birthday or particular event), or after a certain number
            of signatures (if you wanted to get the whole team to send a message
            or everyone from Accounting, this would be a better option). Either
            way, once you're close to your specific date or number of
            signatures, we'll send you a notification to let you know your BisOO
            is almost ready to send!
          </Text>
          <Text style={{fontSize: 11, marginTop: 12}}>
            You can change these settings later from your profile, so don't
            worry if you need more time or more signatures!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '45%', marginRight: '10%'}}>
              <View style={{flexDirection: 'row'}}>
                <Radio />
                <Text> Send on set date</Text>
              </View>
              <Text>{selectedDate?.toISOString().slice(0, 10)}</Text>
              <View>{/* <InputField /> */}</View>
            </View>
            <View style={{width: '45%'}}>
              <View
                style={{flexDirection: 'row'}}
                onTouchEnd={() => {
                  addUpdatePostMetaAction(dispatch, {
                    selectedOption: 'SIGN',
                  });
                }}>
                <Radio selected={selectedOption === 'SIGN'} />

                <Text> Send at set number of signature </Text>
              </View>
              <View>
                <InputField customStyles={{height: 32}}/>
              </View>
            </View>
            <View></View>
          </View>
          <Text style={{color: 'red', fontSize: 12}}>
            Your sending date must be set within a month of the start date. You
            can add on more Live Time in the next section or adjust your Start
            Date to send your BisOO on a later date.
          </Text>
        </View>
      </View>
      <View></View>
      <View>
        <Text style={{color: '#357B7F', fontSize: 16, marginTop: 20}}>
          4 Privacy Settings
        </Text>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 12}}>
            Signing
          </Text>
          <Text style={{fontSize: 12}}>
            This determines whether you card will be accessable for anyone to
            sign from our main SeeKindness page, or only accessable from a
            specific URL
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '45%', marginRight: '10%'}}>
              <View
                onTouchStart={() => updateMetaData({card_signing: 'Private'})}
                style={{flexDirection: 'row'}}>
                <Radio
                  color={'black'}
                  selectedColor={'#357B7F'}
                  selected={postMeta.card_signing === 'Private'}
                />
                <Text>Private</Text>
              </View>
            </View>
            <View style={{width: '45%'}}>
              <View
                onTouchStart={() => updateMetaData({card_signing: 'Public'})}
                style={{flexDirection: 'row'}}>
                <Radio
                  color={'black'}
                  selectedColor={'#357B7F'}
                  selected={postMeta.card_signing === 'Public'}
                />
                <Text>Public</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 12}}>
            Viewing
          </Text>
          <Text style={{fontSize: 12}}>
            This determines whether you card will be accessable for anyone to
            view from our main SeeKindness BisOO page, or only accessable from a
            specific URL
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '45%', marginRight: '10%'}}>
              <View
                onTouchStart={() => updateMetaData({card_viewing: 'Private'})}
                style={{flexDirection: 'row'}}>
                <Radio
                  color={'black'}
                  selectedColor={'#357B7F'}
                  selected={postMeta.card_viewing === 'Private'}
                />
                <Text>Private</Text>
              </View>
            </View>
            <View style={{width: '45%'}}>
              <View
                onTouchStart={() => updateMetaData({card_viewing: 'Public'})}
                style={{flexDirection: 'row'}}>
                <Radio
                  color={'black'}
                  selectedColor={'#357B7F'}
                  selected={postMeta.card_viewing === 'Public'}
                />
                <Text>Public</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DatesInfo;
