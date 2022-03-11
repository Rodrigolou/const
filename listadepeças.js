const Listadepecas =[' pecas de testes ', 'AB', 'peca B']
console.log ('quantidade de caracteres');

if (Listadepecas. length <=10){
    console.log(' as pecas pode ser cadastradas');
    for (let index = 0; index < Listadepecas.length; index++){
        const pecaatual = Listadepecas[index];
        if (pecaatual.length < 3){
            console.log('pecaatual' + ':a peca possui nome a  3 caracteres e nao pode se cadastrada') 
        } else
        console.log ('pecaatual '+ ': a peca pode ser cadastrada')
    }
   } 

 console.log('peso da peça');
 const pesodapecaemgramas = 50;
 if (pesodapecaemgramas >= 100)
  {
   console.log('peso sufuciente');
  } else { 
 console.log('valor insufuciente')
  }