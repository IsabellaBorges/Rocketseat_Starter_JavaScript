var endereco= {
    rua:"Rua dos Pinheiros",
    num:1293,
    bairro:"centro",
    cidade:"São Paulo",
    uf:"SP"
    
    };
    
    function exibirInfo(endereco){
        return (
        "O usuario mora em " + endereco.cidade
        +"/"+endereco.uf + " ,no bairro "
        +endereco.bairro+ ", na rua "+'"'+
        endereco.rua+'"' + " com nº "+endereco.num+".");
    }
    
    console.log(exibirInfo(endereco))