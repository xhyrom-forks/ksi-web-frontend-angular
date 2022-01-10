import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from "./article-preview/article-preview.component";
import { RouterModule } from "@angular/router";
import { SpinnerComponent } from "./spinner/spinner.component";
import { TranslateGenderPipe, TranslateNewItemsPipe, TranslatePointsPipe, TranslateRolePipe } from "../../pipes";
import { DiscussionThreadComponent } from './discussion-thread/discussion-thread.component';
import { DiscussionThreadPostsComponent } from './discussion-thread/discussion-thread-posts/discussion-thread-posts.component';
import { TranslateModule } from "@ngx-translate/core";
import { UsersInlineComponent } from './users-inline/users-inline.component';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ArticlePreviewComponent,
    SpinnerComponent,
    TranslatePointsPipe,
    TranslateNewItemsPipe,
    TranslateRolePipe,
    TranslateGenderPipe,
    DiscussionThreadComponent,
    DiscussionThreadPostsComponent,
    UsersInlineComponent
  ],
    exports: [
        ArticlePreviewComponent,
        SpinnerComponent,
        TranslatePointsPipe,
        TranslateNewItemsPipe,
        DiscussionThreadComponent,
        UsersInlineComponent,
        TranslateRolePipe,
        TranslateGenderPipe,
        DiscussionThreadPostsComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    TooltipModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
