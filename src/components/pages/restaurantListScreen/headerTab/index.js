import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useStore } from '../../../../globalStates/contexts/Store';
import { styles } from './headerTabStyles';

const HeaderTab = () => {
  const { activeTab, setActiveTab } = useStore();
  return (
    <View style={styles.headerTabContainer}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({
  text,
  btnBgClr,
  btnTxtClr,
  activeTab,
  setActiveTab,
}) => {
  const onPressFunction = (text) => {
    console.log('presiono el boton ', text);
  };

  return (
    <Pressable
      onPress={() => setActiveTab(text)}
      style={[
        styles.wrapperCustom,
        activeTab === text
          ? { backgroundColor: 'black', borderColor: 'white' }
          : { backgroundColor: 'white', borderColor: 'black' },
      ]}
    >
      <Text
        style={[
          styles.text,
          activeTab === text ? { color: 'white' } : { color: 'black' },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default HeaderTab;
