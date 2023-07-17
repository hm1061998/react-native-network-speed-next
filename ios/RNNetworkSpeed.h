
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNNetworkSpeedSpec.h"
#else
#import <React/RCTBridgeModule.h>

#endif
#import <React/RCTEventEmitter.h>

@interface RNNetworkSpeed : RCTEventEmitter <RCTBridgeModule>

@end
