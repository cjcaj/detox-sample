# Sample Expo project with Detox

To get started:
```
# install deps
npm install
npm install -g detox-cli

brew update
brew tap wix/brew
brew install --HEAD applesimutils

# run ios
npm run ios

# copy over Expo build for detox
cp -R ~/.expo/ios-simulator-app-cache/Exponent-2.3.0.app e2e/

# run tests
detox test
```

Detailed write up here: https://medium.com/async-la/e2e-testing-react-native-with-detox-screenshots-595146073863
