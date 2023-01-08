import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //画面メッセージ変数
  title: String = "YUDAI SHIMOMA PORTFOLIO SITE";
  // title: String = "yudai shimoma portfolio site";
  options: String = "1,自己紹介 2,スキル 3,作品集 4,プライベート情報 5,お問い合わせ";
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
  input_flg: boolean = false;  //活性・非活性変数
  //動的コンポーネントに使用する変数
  factory!: ComponentFactory<DynamicTableComponent>;
  loop_count: number = -1;

  // @ViewChild を追加、動的コンポーネントに使用
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver) { }

  /**
   * 初期表示処理
   */
  ngOnInit(): void {
    document.getElementById('first_focus')!.focus();
    //動的コンポーネントに使用
    this.factory = this.resolver.resolveComponentFactory(DynamicTableComponent);
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
    this.add_dynamic();
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

  /**
   * 動的コンポーネンんと作成処理
   */
  add_dynamic() {
    this.loop_count++;
    this.viewContainerRef.createComponent(this.factory);
  }
} 
