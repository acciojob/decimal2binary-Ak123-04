function decimalToBinary(num) {
  //Write you code here
	let=rem,i=1;
	let bin=0;
	while(num!=0){
		rem=num%2;
		num=parseInt(num/2);
		bin=bin+rem*i;
		i=i*10;
	}
  cosole.log(bin);
}
window.decimalToBinary = decimalToBinary;
