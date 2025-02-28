class Cliente {
    #cpf;
    
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = [];
    }
    
    getCpf() {
        return this.#cpf;
    }
    
    getNomeUpper() {
        return this.nome.toUpperCase();
    }
    
    getNomeLower() {
        return this.nome.toLowerCase();
    }
    
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Empresa {
    #cnpj;
    
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.telefones = [];
        this.clientes = [];
    }
    
    getCnpj() {
        return this.#cnpj;
    }
    
    getRazaoSocialUpper() {
        return this.razaoSocial.toUpperCase();
    }
    
    getRazaoSocialLower() {
        return this.razaoSocial.toLowerCase();
    }
    
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    
    gerarDescricao() {
        let descricao = `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n----------------------------------------------------\n`;
        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\nEstado: ${cliente.endereco.estado}   cidade: ${cliente.endereco.cidade}  rua: ${cliente.endereco.rua}  número: ${cliente.endereco.numero}\n`;
            cliente.telefones.forEach(telefone => {
                descricao += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
            });
            descricao += "\n";
        });
        return descricao;
    }
}


var enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Avenida Andrômeda", 1000);
var empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", enderecoEmpresa);
empresa.adicionarTelefone(new Telefone("12", "999999999"));
empresa.adicionarTelefone(new Telefone("12", "888888888"));


var clientes = [
    new Cliente("João", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Rua A", 87)),
    new Cliente("Gabriel", "987.654.321-00", new Endereco("SP", "São José dos Campos", "Rua B", 412)),
    new Cliente("Maria", "456.789.123-00", new Endereco("SP", "São José dos Campos", "Rua C", 200)),
    new Cliente("Ana", "789.123.456-00", new Endereco("SP", "São José dos Campos", "Rua D", 300)),
    new Cliente("Pedro", "321.654.987-00", new Endereco("SP", "São José dos Campos", "Rua E", 150))
];

clientes.forEach(cliente => {
    cliente.adicionarTelefone(new Telefone("12", "999999999"));
    cliente.adicionarTelefone(new Telefone("12", "888888888"));
    empresa.adicionarCliente(cliente);
});


console.log(empresa.gerarDescricao());
