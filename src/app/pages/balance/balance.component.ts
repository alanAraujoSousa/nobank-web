import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../../shared/services/account.service';  
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  formTransaction: FormGroup; 
  public balance: string;

  constructor(private _fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: ""  
    });  
  }

  performTransaction() {  
    let id = this.formTransaction.value.accountId;
    this.accountService.getBalance(id).pipe(take(1)).subscribe(d => {
        this.balance = d.body;
      }
    );
  }  
}
