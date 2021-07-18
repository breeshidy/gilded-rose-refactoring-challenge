"use strict";

var _require = require('../src/gilded_rose.js'),
    Shop = _require.Shop,
    Item = _require.Item; // describe('Gilded Rose', function () {
//   it('should foo', function () {
//     const gildedRose = new Shop([new Item('foo', 0, 0)])
//     const items = gildedRose.updateQuality()
//     expect(items[0].name).toEqual('fixme')
//   })
// })


describe('Testing properties of Item class', function () {
  it('Does this class diplay the name property properly', function () {
    // Setup
    var gildedRose = new Item('yam', 10, 2); // execute

    var name = gildedRose.name; // verify

    expect(name).toEqual('yam');
  });
  it('Does this class diplay the sellIn property properly', function () {
    // Setup
    var gildedRose = new Item('yam', 10, 2); // execute

    var name = gildedRose.sellIn; // verify

    expect(name).toEqual(10);
  });
  it('Does this class diplay the quality property properly', function () {
    // Setup
    var gildedRose = new Item('yam', 10, 2); // execute

    var name = gildedRose.quality; // verify

    expect(name).toEqual(2);
  });
}); //  At the end of each day our system lowers both values for every item
// Once the sell by date has passed, Quality degrades twice as fast

describe('Test the Update Quality Feature', function () {
  it('check the quality number does not go below zero', function () {
    var gildedRose = new Shop([new Item('foo', 0, 0)]);
    var items = gildedRose.updateQuality();
    expect(items.quality).toEqual(0);
  });
});