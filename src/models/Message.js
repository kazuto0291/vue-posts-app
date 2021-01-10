import { dbMessages } from '../db';
import { firebase } from 'firebase';
class Message {
  constructor([id, body, date]) {
    this.id = id;
    this.body = body;
    this.date = date;
  }

  static async save({ body }) {
    // もし受け取っったbodyが空文字列、undefindの場合は例外(エラー)を投げる処理
    if (!body || !body.trim()) {
      throw new Error('bodyはstring型で一文字以上の入力が必須です');
    }
    // 問題なく文字が入力されていれば、中身がbodyプロパティーとdateプロパティーオブジェクトのpostDataをセットする。
    const postData = {
      body,
      date: firebase.firestore.FielValue.serverTimestamp()//firestoreの受け付けたサーバーの時間を利用することによってパソコンの環境、場所の環境の違いを防ぐため。
    };
    // docRef--ドキュメントを参照--dbMessagesのaddを使ってpostDataを送る
    const docRef = await dbMessages.add(postData);
    const snapShot = await docRef.get();//getをつかってshapshotを取得する
    const data = snapShot.data();//shapshotの中にデータが入っている。
    const model = this.create(docRef.id, data);

    return model;
  }

  static create(id, data) {
    return new Message({
      id,
      body: data.body,
      date: data.date.toDate().toLocaleString()
    });
  }
}
