import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  formTransaction: FormGroup; 

  constructor(private _fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: ""  
    });  
  }

  performTransaction(value) {  
    debugger;
  }  
}
