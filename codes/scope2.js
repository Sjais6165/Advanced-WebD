let x;
const y = 50;
var z = 70;
console.log(z);
a(40);
{
    let x = 90;
    console.log(x);

}
a(20);
{
    const y = 89;
    console.log(y);
    z = 40;
}
console.log(z);    //var always give priority to ,local scope more than global
console.log(y);
function a(b){
    console.log(b);
}


//