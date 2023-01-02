import { Component, AfterViewInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements AfterViewInit {

  err_meg: String = "番はありません。";
  question_meg: String = "何番を見ますか？番号を入力してください。";
  select_number: String = "";
  enter_flg_1: boolean = false;
  enter_flg_2: boolean = false;
  enter_flg_3: boolean = false;
  enter_flg_4: boolean = false;
  enter_flg_5: boolean = false;
  enter_flg_err: boolean = false;
  loop_count: number = 0;
  input_flg = false;

  constructor(
    private appComponent: AppComponent) {
  }

  async ngOnInit() {
    this.loop_count = await this.appComponent.loop_count;
    window.scrollBy(0, 100);
  }

  ngAfterViewInit() {
    document.getElementById("loop_focus_" + this.loop_count)!.focus();
  }

  onEnter(event: any) {
    if (event.keyCode != 13) {
      return;
    }
    this.input_flg = true;
    if (this.select_number == "42") {
      document.location.href = "https://42tokyo.jp/";
      return;
    }
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
