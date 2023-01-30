import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Tenframe } from '../components/Tenframe/Tenframe';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function TenTableTestScreen({ navigation }:RootStackScreenProps<'TentableScreen'>) {
  return (
    <View style={styles.container}>
      <Tenframe interactable cellCount={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
