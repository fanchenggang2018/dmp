import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { REMEMBER_CHECK, USER_INFO } from './../../services/local-storage.namespace';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  check:boolean;
  userinfo:any = {username:'',password:''};
  /**
   * 构造函数
   */
  constructor(private fb: FormBuilder,
    private router:Router,
    private store:LocalStorageService) {
  }
  /**
   * 提交动作
   * 先做页面必填校验，然后根据选项框动作，来处理是否缓存用户数据
   */
  submitForm(): void {
    console.log(environment)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
   if(this.validateForm.status == 'VALID'){
     if(this.validateForm.value.remember){
        this.store.set(USER_INFO,{
          username:this.validateForm.value.userName,
          password:this.validateForm.value.password
        });
     }
     this.router.navigateByUrl("main");
   }
  }


  /**
   * 页面初始化时 判断缓存中记住我的复选框状态，
   * 如果是选中状态从缓存中读取用户信息，并赋值到页面文本框中
   */
  ngOnInit(): void {
    this.check = this.store.get(REMEMBER_CHECK)==null?false:this.store.get(REMEMBER_CHECK);
    if(this.check){
      this.userinfo = this.store.get(USER_INFO)==null?this.userinfo:this.store.get(USER_INFO);
    }
    this.validateForm = this.fb.group({
      userName: [ this.userinfo.username, [ Validators.required ] ],
      password: [ this.userinfo.password, [ Validators.required ] ],
      remember: [ this.check ]
    });
  }
  /**
   * 记住我复选框状态变化时，根据变化来处理本地缓存中账号密码
   * 去掉勾选时，删除用户信息缓存
   */
  rememberstatuschange():void{
    this.store.set(REMEMBER_CHECK,this.validateForm.value.remember);
    if(!this.validateForm.value.remember){
      this.store.remove(USER_INFO);
    }
  }
}
