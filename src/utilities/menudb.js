const addToDb = id => {
  const exists = getDb();
  let item_cart = {};
  if (!exists) {
    item_cart[id] = 1;
  }
  else {
    item_cart = JSON.parse(exists);
    if (item_cart[id]) {
      const newCount = item_cart[id] + 1;
      item_cart[id] = newCount;
    }
    else {
      item_cart[id] = 1;
    }
  }
  updateDb(item_cart);
}

const getDb = () => localStorage.getItem('item_cart');
const updateDb = cart => {
  localStorage.setItem('item_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const item_cart = JSON.parse(exists);
    delete item_cart[id];
    updateDb(item_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('item_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
