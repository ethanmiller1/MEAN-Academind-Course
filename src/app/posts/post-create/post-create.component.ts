import { Component, } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }
}
