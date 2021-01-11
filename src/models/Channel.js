import { dbChannels } from '../db';

class Channel {
  // constructor の引数をオブジェクトにすると順番を気にしなくてすむからおすすめ
  constructor({id, name }) {
    this.id = id;
    this.name = name;
  }

  static async fetch() {
    // 変数-collectionにdbChannelsからnameでソートした順で取得する
    const collection = await dbChannels.orderBy('name').get();
    if(collection.empty) {
      return [];
    }

    return collection.docs.map(doc => {
      return this.create(doc.id, doc.data())
    });
  }

  static create(id, data) {
    // Channelのインスタンスを作成する
    return new Channel({
      id,
      name: data.name,
    })
  }
}

export default Channel;