import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cngpumps.india',
  appName: 'CNG Pumps Near Me',
  webDir: 'out',
  bundledWebRuntime: false,
  android: {
    buildOptions: {
      keystorePath: './android/keystore/cng-pumps.keystore',
      keystorePassword: 'cngpumps2024',
      keystoreAlias: 'cng-pumps-key',
      keystoreAliasPassword: 'cngpumps2024',
      releaseType: 'APK'
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true
    },
    Geolocation: {
      permissions: ["location", "coarseLocation"]
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav"
    }
  }
};

export default config;
