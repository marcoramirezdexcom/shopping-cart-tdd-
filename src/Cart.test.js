// should get the cart items
// should get the total number of cart items
// should add items to the shopping cart
// should remove an item by itemId
// should get the total price of the cart items

const Chance = require("chance");
const Cart = require("./Cart");

const chance = new Chance();

describe("when using Cart object", () => {
    beforeEach(() => {
        cart = new Cart();
    });

    it("should get the cart items", () => {
        const item = {
            id: chance.guid(),
            price: chance.integer(),
        }

        cart.addItem(item);

        const cartItems = cart.getItems();
        expect(cartItems).toBeDefined();
    });

    it("should get the total number of cart items", () => {
        const item = {
            id: chance.guid(),
            price: chance.integer(),
        }

        cart.addItem(item);

        const cartItemsNumber = cart.getTotalNumberOfItems();
        expect(cartItemsNumber).toBeDefined();
    });

    it("should add items to the shopping cart", () => {
        const item = {
            id: chance.guid(),
            price: chance.integer(),
        }

        cart.addItem(item);

        expect(cart.items).toContainEqual(item);
    });

    it("should remove an item by item ID", () => {
        const item = {
            id: chance.guid(),
            price: chance.integer(),
        }

        cart.addItem(item);

        let items = cart.getTotalNumberOfItems();

        cart.removeItemByID(item.id);
        expect(cart.getTotalNumberOfItems()).toEqual(items - 1);
    });

    it("should get the total price of the cart items", () => {
        const item = {
            id: chance.guid(),
            price: chance.integer(),
        }

        const item2 = {
            id: chance.guid(),
            price: chance.integer(),
        }

        cart.addItem(item);
        cart.addItem(item2);

        let total = cart.getTotalPriceOfItems();

        expect(cart.getTotalPriceOfItems()).toEqual(total)
    });
});
