import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
@Component({
    moduleId:module.id,
  selector: 'github',
  templateUrl: `github.component.html`,
  providers:[GithubService]
})
export class GithubComponent  { 
    user:any;
    repos:any;

    constructor(private _githubService:GithubService) {
        console.log('Github Component init');

        this._githubService.getUser().subscribe(user=>{
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos=>{
            this.repos = repos;
        })
    }
 }
