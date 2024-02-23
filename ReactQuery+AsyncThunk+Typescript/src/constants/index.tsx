const setLocalStorageKeyPrefix = (key: string) => {
  const prefix = "energyfix";
  return prefix + "-" + key;
};

const energyConstants = {
  LOCAL_STORAGE_KEY: {
    accessKey: setLocalStorageKeyPrefix("access-token"),
    refreshKey: setLocalStorageKeyPrefix("refresh-token"),
    user: setLocalStorageKeyPrefix("user"),
    api: setLocalStorageKeyPrefix("api"),
    activeUser: setLocalStorageKeyPrefix("active-user"),
    socket: setLocalStorageKeyPrefix("socket"),
  },
};

export default energyConstants;
