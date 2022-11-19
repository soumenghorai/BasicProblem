class Atm{ 
    constructor(pin,balance){ 
      this.pin=pin; 
      this.balance=balance; 
    } 
     
   getBalance(pin) { 
    if(pin==this.pin){ 
      console.log("your balance is "+this.balance) 
    }else{ 
      console.log("Incorrect pin")  
    } 
  } 
  withdraw(pin,withDrawAmount){ 
    if(pin==this.pin){ 
      if(withDrawAmount<=this.balance){ 
        this.balance = this.balance - withDrawAmount 
        console.log("Please collect your cash") 
    console.log("Your balance is "+this.balance+ " Rupees") 
      }else{ 
        console.log("Insufficient balance !") 
      } 
    } 
    else{ 
      console.log("Incorrect pin")  
    } 
  }   
  } 
   
  let obj = new Atm (1234,1000) 
  console.log(obj.getBalance(1234)) 
  console.log(obj.withdraw(1234,1500))