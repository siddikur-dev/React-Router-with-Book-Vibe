const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

// getWhiteListBook
const getWhitelistBook = () => {
  const storedBookSTR = localStorage.getItem("whitelist");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};
//getWhiteListBook
const addToWhitelistDB = (userId) => {
  const storedWhitelistBook = getWhitelistBook();

  if (storedWhitelistBook.includes(userId)) {
    console.log("hello");
  } else {
    storedWhitelistBook.push(userId);
    const data = JSON.stringify(storedWhitelistBook);
    localStorage.setItem("whitelist", data);
  }
};
// getStoredBook
const addToStoredDB = (userId) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(userId)) {
    console.log("hello");
  } else {
    storedBookData.push(userId);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredBook, addToWhitelistDB };
