[![NPM version](https://badgen.net/npm/v/react-native-network-speed-next)](https://www.npmjs.com/package/react-native-network-speed-next)
[![NPM download week](https://badgen.net/npm/dw/react-native-network-speed-next)](https://www.npmjs.com/package/react-native-network-speed-next)

# react-native-network-speed-next

- This module can get the network speed of the current device. Since I don't know much about app development, there may be many bugs, and I haven't had time to solve them yet, so use it with caution.<br/>
- Android can obtain the network speed of the entire mobile phone and the current `app`, while `ios` can only obtain the network speed of the entire mobile phone at present. After searching the Internet for a long time, `ios` failed to find a method that can accurately count the network speed of a single `app`

## Getting started

`$ npm install react-native-network-speed-next --save`

### Mostly automatic installation

`$ react-native link react-native-network-speed-next`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-network-speed-next` and add `RNNetworkSpeed.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNNetworkSpeed.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.xh.networkspeed.RNNetworkSpeedPackage;` to the imports at the top of the file
- Add `new RNNetworkSpeedPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-network-speed-next'
   project(':react-native-network-speed-next').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-network-speed-next/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-network-speed-next')
   ```

## Usage

```javascript
import networkSpeed from 'react-native-network-speed-next';
// start
networkSpeed.startListenNetworkSpeed(
  ({
    downLoadSpeed,
    downLoadSpeedCurrent,
    upLoadSpeed,
    upLoadSpeedCurrent,
  }) => {
    console.log(downLoadSpeed + 'kb/s'); // download speed for the entire device 整个设备的下载速度
    console.log(downLoadSpeedCurrent + 'kb/s'); // download speed for the current app 当前app的下载速度(currently can only be used on Android)
    console.log(upLoadSpeed + 'kb/s'); // upload speed for the entire device 整个设备的上传速度
    console.log(upLoadSpeedCurrent + 'kb/s'); // upload speed for the current app 当前app的上传速度(currently can only be used on Android)
  }
);
// stop
networkSpeed.stopListenNetworkSpeed();
```
