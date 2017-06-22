/**
* A very simple shopping basket. If you want to replace it with your own, go ahead.
*
* Example usage:
* 
*  //Add an item
*  Basket.add("Blue T-Shirt");
* 
*  //Get line items in basket
*  var basketItems = Basket.items();
*  
* basket items contains: 
* { "Blue T-Shirt": 1 }
*  
* //Remove line item
*  Basket.remove("Blue T-Shirt");
*/
var Basket = (function () {

  var _items = {};

  return {

    /**
    * Adds an item to the basket. If an item with the same
    * name is already in the basket then it's quantity is incremented
    * by one.
    *
    * @param name The name of the item to add to the basket
    */
    add: function (name) {
      if (_items.hasOwnProperty(name)) {
        _items[name] = _items[name] + 1;
      } else {
        _items[name] = 1;
      }
    },

    /**
    * Removes all the items from the basket with the supplied name.
    * 
    * @param name The name of the item to remove from the basket
    */
    remove: function (name) {
      if (_items.hasOwnProperty(name)) {
        delete _items[name];
      } else {
        throw new Error("There is no item with then name []" + name + "] in this basket.");
      }
    },
    /**
    * @returns a copy of all the items in the basket as an object
    */
    items: function () {
      return clone(_items);

      function clone(obj) {
        var target = {};
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }
        return target;
      }
    }
  };
}());