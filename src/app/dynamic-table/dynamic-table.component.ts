import { Component, AfterViewInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements AfterViewInit {
  //画面メッセージ変数
  err_meg: String = "番はありません。";
  question_meg: String = "何番を見ますか？番号を入力してください。";
  select_number: String = ""; //番号入力変数
  //表示箇所のフラグ変数
  enter_flg_1: boolean = false;
  enter_flg_2: boolean = false;
  enter_flg_3: boolean = false;
  enter_flg_4: boolean = false;
  enter_flg_5: boolean = false;
  enter_flg_err: boolean = false;
  input_flg = false;  //活性・非活性変数
  //動的コンポーネントに使用する変数
  loop_count: number = -1; //0だとloop_count==0の時しかフォーカスが当たらないため-1

  constructor(
    private appComponent: AppComponent) {
  }

  /**
   * 初期表示処理
   */
  async ngOnInit() {
    this.loop_count = await this.appComponent.loop_count;
    window.scrollBy(0, 100);
  }

  /**
   * 初期表示処理後すぐの処理
   */
  ngAfterViewInit() {
    document.getElementById("loop_focus_" + this.loop_count)!.focus();
  }

  /**
   * エンターキーが押された際の処理
   * @param {any} event エンターキー押下時の情報を格納
   */
  onEnter(event: any) {
    //エンターが日本語変換時のものか判断
    if (event.keyCode != 13) {
      return;
    }
    //一度入力した欄は、非活性にする
    this.input_flg = true;
    if (this.select_number == "42") {
      document.location.href = "https://42tokyo.jp/";
      return;
    }
    //動的コンポーネント作成
    this.appComponent.add_dynamic();
    if (this.select_number == "1") {
      this.enter_flg_1 = true;
      return;
    }
    if (this.select_number == "2") {
      this.enter_flg_2 = true;
      return;
    }
    if (this.select_number == "3") {
      this.enter_flg_3 = true;
      return;
    }
    if (this.select_number == "4") {
      this.enter_flg_4 = true;
      return;
    }
    if (this.select_number == "5") {
      this.enter_flg_5 = true;
      return;
    }
    if (this.select_number == "") {
      this.enter_flg_err = true;
      this.err_meg = "";
    } else {
      this.enter_flg_err = true;
      this.err_meg = this.select_number + "番はありません。";
    }
  }
}
