import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RoundButton from '../../components/RoundButton'

const MoreView = () => {
    const [expand, setExpand] = useState(false)
    return (
        <View style={{ backgroundColor: '#FFECD5', paddingVertical: 10, }}>
            <View style={{ backgroundColor: '#FFECD5', paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 100, fontWeight: 'bold' }}>WELCOME TO SEE KINDNESS</Text>
                <View style={{ marginLeft: 40, marginRight: 20, flexDirection: 'row' }} onTouchEnd={()=>setExpand(!expand)}>
                    <Icon name={expand?"caret-up":"caret-down"} size={20} />

                    <Text style={{ marginRight: 10, marginLeft: 5 }}>
                        {expand ? 'LESS' : 'More'}
                    </Text>
                </View>
            </View>

            {expand && <View style={{ paddingHorizontal: 10, }}>
                <Text style={{ fontWeight: '400' }}>
                    SeeKindness is a place to document acts of kindness happening globally. See it. Share it. Inspire others.
                    </Text>
                <Text style={{ fontWeight: '400', marginTop: 10 }}>
                    You can do more! Create a BiOO to collect messages to show your appreciation for someone special
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

                    <RoundButton customStyles={{ width: 150, height: 35 }}   >
                        <Text style={{ color: '#337A7E' }}>LEARN MORE</Text>
                    </RoundButton>

                    <RoundButton customStyles={{ backgroundColor: '#B4224F', marginLeft: 10, width: 160, height: 35 }}>
                        <Text style={{ color: 'white' }}>SEND A
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: 'white', marginLeft: 5 }}>
                            BisOO
                        </Text>
                    </RoundButton>
                </View>
            </View>}
        </View>
    )
}

export default MoreView
