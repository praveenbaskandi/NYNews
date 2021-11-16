import AsyncStorageFactory from '@react-native-async-storage/async-storage';

class LocalStorage {
  static getItem = async key => {
    const storedKey = await AsyncStorageFactory.getItem(key);

    return storedKey;
  };

  static setItem = async (key, value) =>
    AsyncStorageFactory.setItem(key, value);

  static removeItem = async key => {
    await AsyncStorageFactory.removeItem(key);

    return false;
  };
}

export default LocalStorage;
