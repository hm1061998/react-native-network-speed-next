import { NativeModules, NativeEventEmitter } from 'react-native';
import type { EmitterSubscription } from 'react-native';
const { RNNetworkSpeed } = NativeModules;

class NetworkSpeed {
  subscription: EmitterSubscription | any;
  emitter: NativeEventEmitter;
  constructor() {
    this.emitter = new NativeEventEmitter(RNNetworkSpeed);
  }

  startListenNetworkSpeed(
    callback: () => {
      downLoadSpeed: number;
      downLoadSpeedCurrent: number | any;
      upLoadSpeed: number;
      upLoadSpeedCurrent: number | any;
    }
  ) {
    if (!callback || typeof callback !== 'function') {
      throw new Error('callback need a function');
    }

    RNNetworkSpeed.startListenNetworkSpeed();
    this.subscription = this.emitter.addListener('onSpeedUpdate', callback);
  }

  stopListenNetworkSpeed() {
    if (this.subscription) {
      RNNetworkSpeed.stopListenNetworkSpeed();
      this.subscription.remove();
      this.subscription = null;
    }
  }
}

export default NetworkSpeed;
