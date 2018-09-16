import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../app/models/message';
import { DialogflowService } from '../services/dialogflow.service';
import { Content, List } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //@ViewChild(Content) contentArea: Content;
  @ViewChild(Content) contentArea: Content;
  @ViewChild(List, {read: ElementRef}) chatList: ElementRef;

  public message : Message;
  public messages : Message[];
  private mutationObserver: MutationObserver;

  constructor(private dialogflowService: DialogflowService){
    this.message = new Message('', 'assets/imgs/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/imgs/bot.png', new Date())
    ];
  }

  ngOnInit(){
 
    this.mutationObserver = new MutationObserver((mutations) => {
        this.contentArea.scrollToBottom();
    });

    this.mutationObserver.observe(this.chatList.nativeElement, {
        childList: true
    });
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    //this.message = new Message('', 'assets/imgs/user.png');
    this.dialogflowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/imgs/bot.png', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/imgs/user.png');

    //this.contentArea.scrollToBottom();
  }

}
