import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = "yudai shimoma portfolio";
  options: String = "1,profile 2,skill 3,portfolio 4,background information 5,contact";
  err_meg: String = "番はありません。";
  question_meg: String = "何番を見ますか？番号を入力してください。";
  select_number: String = "";
  enter_flg_1: boolean = false;
  enter_flg_2: boolean = false;
  enter_flg_3: boolean = false;
  enter_flg_4: boolean = false;
  enter_flg_5: boolean = false;
  enter_flg_err: boolean = false;
  factory!: ComponentFactory<DynamicTableComponent>;
  loop_count: number = -1;
  input_flg = false;

  // @ViewChild を追加
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    document.getElementById('first_focus')!.focus();
    this.factory = this.resolver.resolveComponentFactory(DynamicTableComponent);
  }

  onEnter() {
    this.input_flg = true;
    if (this.select_number == "42") {
      document.location.href = "https://42tokyo.jp/";
      return;
    }
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

  add_dynamic() {
    this.loop_count++;
    this.viewContainerRef.createComponent(this.factory);
  }
} 
