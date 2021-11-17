# NYT News Demo

Based on:

- [React 17](https://reactjs.org)
- [React Native 0.65](https://reactnative.dev)
- [Redux](https://redux.js.org)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)

## Getting started

- Install [yarn](https://classic.yarnpkg.com/en/docs/install): `npm i -g yarn`
- Install dependencies: `yarn`
- iOS-specific:
  - update pod files `cd ios && pod update`
  - move back and run `npx react-native run-ios`

## Running

- IOS Simulator - `npx react-native run-ios`
- Android Simulator - `npx react-native run-android`


## Screen Shot

### Filter Screen Shot

- This image show the filter is working
- In some case filter will not show any news becasue the there is no keyword match
- Both filer can be used in the same time

<img src="screen_shot/Screenshot_filter.png" width="150" height="300"/>




### Offline Screen Shot

- This image show app is working offline.
- In case thee is no internet user will see red color offline tag at the top and in case there is news store previously news will be seen.
- News will only shown in view in case of previous used of internet save at particular category.

<img src="screen_shot/Screenshot_offline.png" width="150" height="300"/>



### Online Screen Shot

- This image show app is working online.
- In case thee is internet user will see green color online tag at the top and news will be fetch from API.
- All the news will be fetch on click of category from server.

<img src="screen_shot/Screenshot_online.png" width="150" height="300"/>



