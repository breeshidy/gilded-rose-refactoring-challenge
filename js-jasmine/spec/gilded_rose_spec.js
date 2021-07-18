const { Shop, Item } = require('../src/refactoredGildedRose');
describe('Testing properties of Item class', function () {
  it('Does this class diplay the name property properly', function () {
    // Setup
    const gildedRose = new Item('yam', 10, 2);
    // execute
    const name = gildedRose.name;

    // verify
    expect(name).toEqual('yam');
  });

  it('Does this class diplay the sellIn property properly -- number of days', function () {
    // Setup
    const gildedRose = new Item('yam', 10, 2);
    // execute
    const sellIn = gildedRose.sellIn;

    // verify
    expect(sellIn).toEqual(10);
  });

  it('Does this class diplay the quality property properly', function () {
    // Setup
    const gildedRose = new Item('yam', 10, 2);
    // execute
    const quality = gildedRose.quality;

    // verify
    expect(quality).toEqual(2);
  });
});

//  At the end of each day our system lowers both values for every item
// Once the sell by date has passed, Quality degrades twice as fast

describe('Test the Update Quality Feature', function () {
  it('check the quality number of normal product reduce by one', function () {
    const gildedRose = new Shop([new Item('foo', 0, 1)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('check the quality number does not go below zero', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  describe('Test the product of Aged Brie', function () {
    // "Aged Brie" actually increases in Quality the older it gets

    it('check if name is Aged Brie and quality number is above 50, the number doesnt increase', function () {
      const gildedRose = new Shop([new Item('Aged Brie', 7, 50)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(50);
    });

    it('check if name is Aged Brie and quality number increases as days increases', function () {
      const gildedRose = new Shop([new Item('Aged Brie', 7, 10)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(11);
    });
  });

  /*
Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.
  */
  describe('Test the product of Sulfuras', function () {
    // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
    it('check if name is Sulfuras, then quality does not decrease  ', function () {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 5, 80)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(80);
    });

    it('check if name is Sulfuras, then sellIn does not decrease  ', function () {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 5, 10)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(5);
    });
  });

  describe('Test the product of Backstage passes', function () {
    it('check if name is Backstage passes increases as sellin days increase', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(11);
    });
    it('check if name is Backstage passes and quality number is above 50, the number doesnt increase', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 7, 50)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(50);
    });

    it('check if name is Backstage passes increases by 3 when sellIn is 5 days or less ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(13);
    });

    xit('check if name is Backstage passes increases by 2 when sellIn is 10 days or less ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
      ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(12);
    });
  });

  // // Quality drops to 0 after the concert
  xit('check if name is Backstage quality drops to 0 when sellin is 0 ', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  // "Conjured" items degrade in Quality twice as fast as normal items
});
