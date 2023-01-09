//membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
     this.sopir = sopir;
     this.trayek = trayek;
     this.penumpang = penumpang;
     this.kas = kas;

     this.penumpangNaik = function (namaPenumpang) {
          if (this.penumpang.length == 0) {
               this.penumpang.push(namaPenumpang);
               return this.penumpang;
          }

          for (let i = 0; i < this.penumpang.length; i++) {
               if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
               }

               if (this.penumpang[i] == namaPenumpang) {
                    console.log(`${namaPenumpang} sudah ada di dalam angkot.`);
                    return this.penumpang;
               } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
               }
          }
     };

     this.penumpangTurun = function (namaPenumpang, bayar) {
          if (this.penumpang.length == 0) {
               console.log(`${namaPenumpang} tidak ada di angkot`);
               return false;
          }

          for (let i = 0; i < this.penumpang.length; i++) {
               if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
               }
          }
     };
}

let angkot1 = new Angkot("sandhika galih", ["Cicaheum", "Cibiru"], [], 0);
