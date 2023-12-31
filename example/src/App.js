import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NetworkSpeed from 'react-native-network-speed-next';

const networkSpeed = new NetworkSpeed();
export default function App() {
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    networkSpeed.startListenNetworkSpeed(
      ({
        downLoadSpeed,
        downLoadSpeedCurrent,
        upLoadSpeed,
        upLoadSpeedCurrent,
      }) => {
        // console.log({
        //   downLoadSpeed,
        //   downLoadSpeedCurrent,
        //   upLoadSpeed,
        //   upLoadSpeedCurrent,
        // });
      }
    );
    return () => {
      networkSpeed.stopListenNetworkSpeed();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
