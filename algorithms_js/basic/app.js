
// function reverseString(str){
//     "use strict";
//     var arr = [];
//     for(var i = 0; i < str.length; i++ ){
//         arr.unshift(str[i]);
//     }
//     str = arr.join("");
//     console.log(typeof str);
//     return str;
// }
        //
        // reverseString("hello");

        //Sin recursividad
        // function factorizar(num) {
        // let res = 1;
        //     while (num > 0) {
        //         res = res * num;
        //         --num;
        //     }
        //      return res;
        // }

        //con recursividad y operador condicional ternario
        // function factorizar(num) {
        //     return num >= 1 ? num * factorizar(num - 1) : 1;
        // }
        // console.log(factorizar(5));


        // function findLongestWordLength(str) {
        //
        //     str = str + " "; //agregamos un espacio, ya que nos guiaremos de esto
        //     let pos = str.indexOf(" "); //primera posicion de espacio
        //     let posOld = -1; //el espacio que no esta, al comienzo de la cadena
        //     let word = 0; //variable para alacenar la longitud de cada palabra
        //     let res = 0; //variable para almacenar el resultado
        //     while (pos != -1) { //cuando el indexOf de -1 salga del while
        //         word = (pos - posOld) - 1; //resta la primera posicion del espacio y resta 1 porque se comiensza por 0
        //         posOld = pos; //guardamos la posicion del espacio
        //         pos = str.indexOf(" ", pos + 1); // buscamos la segunda posicion del espacio
        //         if (word > res) { //compara entre la longitud de las palabras
        //             res = word; // 4
        //         } else {
        //             res = res;
        //         }
        //     }
        //     return res;
        // }


        // function findLongestWordLength(str) {
            let str = "Hola mi nombre es Joseph";
            let res = str.split(" ");
            let resultado = 0;
            for (let i = 0; i< res.length; i++){
                console.log(res[i].length);
                console.log("nuevo "+resultado);
                if(  res[i].length > resultado){
                    resultado = res[i].length;
                }else{
                    resultado = resultado;
                }
            }
            console.log(resultado);
        // }

    //     console.log(findLongestWordLength("Hola mi nombre es Joseph"));

//Ejercicio Return Largest Numbers in Arrays
// function largestOfFour(arr) {
//     // You can do this!
//     let newArr = [];
//     for (let i = 0; i < arr.length ; i++)
//     {
//         let numMayor = arr[i][0];
//         for (let j = 0; j < arr[i].length ; j++ )
//         {
//             if(arr[i][j] > numMayor)
//             {
//                 numMayor = arr[i][j];       
//             }
//         }
//         newArr.push(numMayor);
//     }
//     return newArr;
//   }
  
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Ejercicio