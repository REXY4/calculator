//1.check tombol
const kalkulator = document.querySelector('.kalkulator');
const layar = document.querySelector('.layar');
const key =  document.querySelector('.key');
//membuat kalkulasi nya
const kalkulasi = (n1, operator, n2) => {
  let result = "";
  if(operator === 'tambah'){result = parseFloat(n1) + parseFloat(n2);}
  if(operator === 'kurang'){result = parseFloat(n1) - parseFloat(n2);}
  if(operator === 'kali'){result = parseFloat(n1) * parseFloat(n2);}
  if(operator === 'bagi'){result = parseFloat(n1) / parseFloat(n2);}
  if(operator === 'modulus'){result = parseFloat(n1) % parseFloat(n2)}

  return result;
}


key.addEventListener('click' , t => {
  if(t.target.matches('button')) {
    const tombol = t.target;
    const action = tombol.dataset.action;
    const contentAngka = tombol.textContent;
    const tampilkan = layar.textContent;
    const ganti = kalkulator.dataset.ganti;

    //memasukan foreach


//menampilkan angka di layar
if(!action)
{
     if(tampilkan === '0' ||
        ganti === 'operator' ){
       layar.textContent = contentAngka;
     }else {
       layar.textContent = tampilkan + contentAngka;
     }
}
//batas !action
//memasukan angka decimal
   if( action === 'decimal' ){
    layar.textContent = tampilkan + '.';
     }

//kalkulasinya
if(action === 'kalkulasi'){
  const angka1 = kalkulator.dataset.angka1;
  const operator = kalkulator.dataset.operator;
  const angka2 = tampilkan;

  layar.textContent = kalkulasi(angka1,operator,angka2);
}

if(action === 'tambah' ||
   action === 'kurang'  ||
   action === 'kali'   ||
   action === 'bagi'    ||
   action === 'modulus') {

     kalkulator.dataset.ganti = "operator"; //untuk mengganti tampilan angka ketika operator di tekan
    kalkulator.dataset.operator = action; //untuk menampilkan angka  hasil kalkulasi
     kalkulator.dataset.angka1 = tampilkan; // untuk menampilkan hasil kalkulasi
   }



//batas//
  }

});


//name
var x = document.querySelector("#r");
x.addEventListener('mouseover' , tuka => {
  x.textContent = "Rizktech"});

  x.addEventListener('mouseout' , tuka => {
    x.textContent = "R"});
