import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../shared/services/account.service';  
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  formTransaction: FormGroup; 
  public balance: {};

  constructor(private toastr: ToastrService, private _fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: new FormControl("", Validators.required) 
    });  
  }

  performTransaction() {  
    let id = this.formTransaction.value.accountId;
    this.accountService.getBalance(id).pipe(take(1)).subscribe(d => {
        this.balance = d.body;
      },
      err => {
        this.balance = false;
        this.toastr.error("Please enter a valid account identifier", "The Request Failed!");
      }
    );
  }  
}
