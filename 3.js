function hitungBerapaLembarUang(harga, jumlah) {
  let uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000];
  let lembar = [];
  let i = 0;
  let j = 0;

  while (harga > 0) {
    if (harga >= uang[i]) {
      if (j + 1 > jumlah) break;
      lembar.push(uang[i]);
      harga = harga - uang[i];
      j++;
    } else {
      i++;
    }
  }

  return lembar;
}

console.log(hitungBerapaLembarUang(23000, 4));
