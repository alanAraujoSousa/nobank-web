import {  
  Component,  
  OnInit
} from '@angular/core';  
import { FormGroup, FormBuilder } from '@angular/forms';  
import { AccountService } from '../../shared/services/account.service';  

@Component({  
  selector: 'app-withdraw',  
  templateUrl: './withdraw.component.html',  
  styleUrls: ['./withdraw.component.scss']  
})  
export class WithdrawComponent implements OnInit {  

  formTransaction: FormGroup;  
  
  constructor(private _fb: FormBuilder, private accountService: AccountService) {}  

  ngOnInit(): void {  
    this.formTransaction = this._fb.group({  
      accountId: "",  
      moneyAmount: ""  
    });  
  }

  performTransaction(value) {  
    
  }  
}  