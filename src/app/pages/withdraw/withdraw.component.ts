import {  
  Component,  
  OnInit
} from '@angular/core';  
import { FormGroup, FormBuilder } from '@angular/forms';  
import { AccountService } from '../../shared/services/account.service';  
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({  
  selector: 'app-withdraw',  
  templateUrl: './withdraw.component.html',  
  styleUrls: ['./withdraw.component.scss']  
})  
export class WithdrawComponent implements OnInit {  

  formTransaction: FormGroup;  
  
  constructor(private toastr: ToastrService, private _fb: FormBuilder, 
              private accountService: AccountService) {}  

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: "",  
      moneyAmount: ""  
    });  
  }

  performTransaction(value) {  
    let id = this.formTransaction.value.accountId;
    let dto = {moneyAmount: this.formTransaction.value.moneyAmount};
    this.accountService.withdraw(id, dto).pipe(take(1)).subscribe(d => {
        this.toastr.success('Successful withdraw!', 'You have successfuly withdraw ' 
          + dto.moneyAmount + " from your account!");
      }
    );
  }  
}  