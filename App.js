/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Button, TextInput, ProgressBar, MD3Colors, Switch, Surface, Chip } from 'react-native-paper';
import React from 'react';
import { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const MySwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  }
  return <Switch color='red' value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [selected, setSelected] = useState(false);
  const [textColor, setTextColor] = useState(`red`);
  const [style2, setStyle] = useState({
    borderColor: `red`,
    backgroundColor: `grey`,
  });

  useEffect(() => {
    if (selected) {
      setTextColor(`red`);
      setStyle({ borderColor: `grey`, backgroundColor: `transparent` });
    } else {
      setTextColor(`grey`);
      setStyle({ borderColor: `grey`, backgroundColor: `transparent` });
    }
  }, [selected]);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
        <Text>{"\n"}TextInput (email)</Text>
        <TextInput
          placeholder="Mimomamemomamemo"
          label="Email"
          mode="outlined"
        />
        <Text>{"\n"}Button (amb text i icona)</Text>
        <Button style={styles.buttonSt} icon="alien" mode="contained" onPress={() => alert('Pressed')}>
          ALIEN
        </Button>
        <Button style={styles.buttonSt} icon="alien" mode="outlined" onPress={() => alert('Pressed')}>
          ALIEN
        </Button>
        <Button style={styles.buttonSt} icon="alien" mode="elevated" onPress={() => alert('Pressed')}>
          ALIEN
        </Button>
        <Button style={styles.buttonSt} icon="alien" mode="contained-tonal" onPress={() => alert('Pressed')}>
          ALIEN
        </Button>
        <Text>{"\n"}Swith necessites un descans?</Text>
        <MySwitch></MySwitch>
        <Text>{"\n"}Botó dins d'un component surface</Text>
        <Surface style={styles.surface} elevation={4}>
          <Button style={styles.buttonSt} icon="alien" mode="contained" onPress={() => alert('Pressed')}>
            ALIEN
          </Button>
        </Surface>
        <Text>{"\n"}Provant Chips</Text>
        <View style={styles.row}>
        <Chip style={styles.style2} icon="wifi" selected={selected} selectedColor={textColor} onPress={handlePress}>Wifi</Chip>
          <Chip icon="web" onPress={() => console.log('Pressed')}>Internet</Chip>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonSt:{
    borderRadius: 5,
    color: "red",
  },
  row:{
    flexDirection:"row", 
    flexWrap:"wrap",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
