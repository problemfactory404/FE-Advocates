import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (e) {
        return -1;
    }
};

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Value removed successfully!');
    } catch (error) {
        console.log('Error removing value:', error);
    }
};



export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log('VALUE-->', value)
        return value != null ? JSON.parse(value) : null
        if (value !== null) {
            console.log('VALUE-->', value)
            return value;
        }
        return -1;
    } catch (e) {
        // error reading value
        return -1
    }
};

export const getStorageData = async (key: string) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            console.log('data retrieved successfully:', data);
            return data;
        } else {
            console.log('No data found');
            return null;
        }
    } catch (error) {
        console.log('Error retrieving data:', error);
        return null;
    }
};
