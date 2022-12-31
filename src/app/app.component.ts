import { Component } from '@angular/core';
// import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
// import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  // factory: ComponentFactory<DynamicTableComponent>;

  // constructor(
  //   public viewContainerRef: ViewContainerRef,
  //   private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    document.getElementById('first_focus')!.focus();
    // this.factory = this.resolver.resolveComponentFactory(DynamicTableComponent);
  }

  onEnter() {
    this.clear_flg();
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
    if (this.select_number == "42") {
      document.location.href = "https://42tokyo.jp/";
      return;
    }
    if (this.select_number == "") {
      this.enter_flg_err = true;
      this.err_meg = "";
    } else {
      this.enter_flg_err = true;
      this.err_meg = this.select_number + "番はありません。";
    }
    // this.viewContainerRef.createComponent(this.factory);
  }

  clear_flg() {
    this.enter_flg_1 = false;
    this.enter_flg_2 = false;
    this.enter_flg_3 = false;
    this.enter_flg_4 = false;
    this.enter_flg_5 = false;
    this.enter_flg_err = false;
    this.err_meg = "番はありません。";
  }
} 
