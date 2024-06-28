class Cart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items;
  }

  getTotalNumberOfItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItemByID(id) {
    var removeIndex = this.items.map(item => item.id).indexOf(id);
    this.items.splice(removeIndex, 1);
  }

  getTotalPriceOfItems() {
    var total = 0;

    this.items.forEach((item) => {
      total += item.price;
    });

    return total;
  }
}

module.exports = Cart;
