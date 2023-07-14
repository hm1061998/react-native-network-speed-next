
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNNetworkSpeedNextSpec.h"

@interface NetworkSpeedNext : NSObject <NativeNetworkSpeedNextSpec>
#else
#import <React/RCTBridgeModule.h>

@interface NetworkSpeedNext : NSObject <RCTBridgeModule>
#endif

@end
