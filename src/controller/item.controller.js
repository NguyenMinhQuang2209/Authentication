const Item = require("../module/item.module");
class ItemController {
  async getItems(req, res) {
    try {
      const items = await Item.find();

      const itemsList = items.map((item) => {
        let data = {};
        item.datas.forEach((datItem) => {
          data = {
            ...data,
            [datItem.key]: datItem.value,
          };
        });
        return {
          itemName: item.itemName,
          itemType: item.itemType,
          ...data,
        };
      });

      return res.status(200).json([...itemsList]);
    } catch (err) {
      return res.status(500).json({ msg: err.toString() });
    }
  }
  async setItem(req, res) {
    try {
      const { itemName, itemType, datas } = req.body;
      const item = new Item({
        itemName,
        itemType,
        datas,
      });
      await item.save();
      return res.status(200).json({ msg: `Tạo thành công ${itemName}` });
    } catch (err) {
      return res.status(500).json({ msg: err.toString() });
    }
  }
}

module.exports = new ItemController();
