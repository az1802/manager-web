import config from "@/config";

export default {
  setItem(key, val) {
    const storage = this.getStorage();
    storage[key] = val;
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  getItem(key, defaultVal) {
    return this.getStorage()[key] || defaultVal;
  },
  getStorage() {
    try {
      const storageStr =  window.localStorage.getItem(config.namespace) || "{}";
      return JSON.parse(storageStr);
    } catch (err) {
      return {};
    }
  },
  clearItem(key) {
    const storage = this.getStorage();
    delete storage[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
