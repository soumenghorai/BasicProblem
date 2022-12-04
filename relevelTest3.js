// let [m, n] = readline().split(" ").map(x => parseInt(x));
// let accounts = [];
// for(let i = 0; i < m; i++){
//     let arr = readline().split(" ").map(x => parseInt(x)).slice(0, n);
//     accounts.push(arr);
// }

function wealthyCustomer(accounts, m, n)
{
    //write your logic here
	let maxWealth = 0;
	for(let i = 0; i < m; i++){
		let currentWealth = 0;
		for(let j = 0; i < n; j++){
			currentWealth += accounts[i][j];
		}
	
		// maxWealth = max(maxWealth,currentWealth);
        if(currentWealth > maxWealth){
            maxWealth = currentWealth;
        }
	}
	return maxWealth;

	
}
let accounts = [2, 3, 1, 1, 4, 2, 2, 3];
m = accounts.length;
n = accounts[0].length;
console.log(wealthyCustomer(accounts, m, n))