const getStorage = (storage: Storage, key: string) => {
    const saved = storage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  const addToStorage = (storage: Storage, key: string, item: object | Array<any>) => {
    const existingValue = getStorage(storage, key);
    let newValue;
    if (existingValue && !Array.isArray(existingValue)) {
      newValue = { ...existingValue, ...item };
    } else {
      newValue = existingValue ? [...existingValue, item] : [item];
    }
    storage.setItem(key, JSON.stringify(newValue));
  }

  const setToStorage = (storage: Storage, key: string, item: object | Array<any>) => {
    storage.setItem(key, JSON.stringify(item));
  }

  export {getStorage, addToStorage, setToStorage}