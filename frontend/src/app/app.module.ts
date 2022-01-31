import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpChatComponent } from './http-chat/http-chat.component';
import { PocTreeStrutureComponent } from './poc-tree-struture/poc-tree-struture.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ScrollingModule,
    MatCheckboxModule,
    MatTreeModule,
  ],
  declarations: [
    AppComponent,
    HttpChatComponent,
    WebSocketChatComponent,
    PocTreeStrutureComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
