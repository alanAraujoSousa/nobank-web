import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormBuilder } from '@angular/forms';  
import { AccountService } from '../../shared/services/account.service';  
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  formTransaction: FormGroup;  
  
  constructor(private _fb: FormBuilder, private accountService: AccountService) {}  

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: "",  
      moneyAmount: ""  
    });  
  }

  performTransaction() {  
    let id = this.formTransaction.value.accountId;
    let dto = {moneyAmount: this.formTransaction.value.moneyAmount};
    this.accountService.deposit(id, dto).pipe(take(1)).subscribe(d => {
        //TODO launch a alert!
      }
    );
  }  

}
