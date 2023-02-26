var idade = 66
console.log (`Você tem ${idade} anos`)
if (idade < 16){ 
    console.log('Não vota') // Se a idade for menor que 16, não vota
} else {
    if (idade < 18 || idade > 65) { 
        console.log ('Voto opcional') // se entre 16 e 17, o voto é opcional.
    } else {
        console.log ('Vota') // e se for maior que 18, vota
    }
}