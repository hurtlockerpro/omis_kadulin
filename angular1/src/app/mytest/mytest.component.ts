import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
  /*template:`<h1>Hello from typescript html</h1>
  <div class="test">this is my div</div>
  `,*/
  //styles:['.test{color:green;font-size:36px;}']
})
export class MytestComponent implements OnInit {

  firstname:string = 'Vladimir'
  cars:string[] = ['audi', 'bmw', 'citroen', 'hfhfhf']
  isShown:boolean = true;
  resultNumber:number = 0;
  myFirstname:string = 'Vladimir 111'
  isRed:boolean = false

  constructor() { }

  ngOnInit(): void {
    
  }

  increment():void{
    this.resultNumber++
  }
  decrement():void{
    this.resultNumber--
  }

  changeColor():void{
    this.isRed = !this.isRed
    console.log(this.isRed)
  }

}
