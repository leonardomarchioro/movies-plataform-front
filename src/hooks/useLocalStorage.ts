import { useState } from 'react';
import CryptoJS from "crypto-js";

const KEY = import.meta.env.VITE_SECRET_KEY;

function encryptData(data: any) {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), KEY).toString();
    return ciphertext;
  }

function decryptData(ciphertext: any) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, KEY);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(plaintext);
  }

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      const ciphertext = localStorage.getItem(key);
      if (ciphertext !== null) {
        const decryptedValue = decryptData(ciphertext);
        return decryptedValue;
      }
    } catch (error) {
      console.error(`Erro ao obter dados do local storage: ${error}`);
    }
    return initialValue;
  });

  const setValueInLocalStorage = (newValue: any) => {
    try {
      const encryptedValue = encryptData(newValue);
      setValue(newValue);
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error(`Erro ao armazenar dados no local storage: ${error}`);
    }
  };

  return [value, setValueInLocalStorage];
}

export default useLocalStorage;