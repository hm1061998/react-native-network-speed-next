import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-network-speed-next' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NetworkSpeedNext = NativeModules.NetworkSpeedNext
  ? NativeModules.NetworkSpeedNext
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return NetworkSpeedNext.multiply(a, b);
}
