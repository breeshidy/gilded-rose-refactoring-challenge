class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    // return this.items[0].name
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[0].quality > 0) {
        this.items[i].quality = this.checkRegularItem(
          this.items[i].name,
          this.items[i].quality
        );
        this.items[i].quality = this.checkAgedBrieItem(
          this.items[i].name,
          this.items[i].quality
        );
        this.items[i].quality = this.checkASulfurasItem(
          this.items[i].name,
          this.items[i].quality
        );
        this.items[i].quality = this.checkABackstageItem(
          this.items[i].name,
          this.items[i].quality,
          this.items[i].itemSellIn
        );
      }
    }
    return this.items;
  }

  checkRegularItem(itemName, itemQuality) {
    if (
      itemName !== "Aged Brie" &&
      itemName !== "Backstage passes to a TAFKAL80ETC concert" &&
      itemName !== "Sulfuras, Hand of Ragnaros"
    ) {
      if (itemQuality < 50) {
        itemQuality = itemQuality - 1;
      }
    }
    return itemQuality;
  }

  checkAgedBrieItem(itemName, itemQuality) {
    if (itemName === "Aged Brie") {
      if (itemQuality < 50) {
        itemQuality = itemQuality + 1;
      }
    }
    return itemQuality;
  }

  checkASulfurasItem(itemName, itemQuality) {
    if (itemName === "Sulfuras, Hand of Ragnaros") {
      itemQuality = 80;
    }
    return itemQuality;
  }

  checkABackstageItem(itemName, itemQuality, itemSellIn) {
    if (itemName === "Backstage passes to a TAFKAL80ETC concert") {
      if (itemQuality < 50) {
        if (itemSellIn <= 5) {
          itemQuality = itemQuality + 3;
        } else if (itemSellIn > 5 && itemSellIn <= 10) {
          itemQuality = itemQuality + 2;
        } else {
          itemQuality = itemQuality + 1;
        }
      }
    }
    return itemQuality;
  }
}

// let gildedRose = new Shop([new Item("foo", 0, 0)]);
// gildedRose = gildedRose.updateQuality();
// console.log(gildedRose);

module.exports = {
  Item,
  Shop,
};
