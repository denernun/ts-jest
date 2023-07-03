## exemplo 1
```typescript
interface Veiculo {
  ligar(): void;
}

class Carro implements Veiculo {
  ligar(): void {
    console.log('Ligando o carro');
  }
}

class Moto implements Veiculo {
  ligar(): void {
    console.log('Ligando a moto');
  }
}

abstract class VeiculoFactory {
  public abstract criarVeiculo(): Veiculo

  public ligarVeiculo(): void {
    const veiculo = this.criarVeiculo();
    veiculo.ligar();
  }
}

class CarroFactory extends VeiculoFactory {
  public criarVeiculo(): Veiculo {
    return new Carro();
  }
}

class MotoFactory extends VeiculoFactory {
  public criarVeiculo(): Veiculo {
    return new Moto();
  }
}

const carro = new CarroFactory();
carro.ligarVeiculo();

const moto = new MotoFactory();
moto.ligarVeiculo();
```

## exemplo2

```typescript
class Veiculo {
  protected modelo: any;
  protected estaAlugado: boolean;

  constructor(modelo: any) {
      this.modelo = modelo;
      this.estaAlugado = false;
  }

  alugar() {
      this.estaAlugado = true;
      console.log(`${this.modelo} esta alugado`)
  }

  devolver() {
      this.estaAlugado = false;
      console.log(`${this.modelo} esta disponivel`)
  }
}

class Carro extends Veiculo {
  constructor(modelo: any) {
      super(modelo);
  }
}

class Moto extends Veiculo {
  constructor(modelo: any) {
      super(modelo);
  }
}

abstract class AluguelFactory {
  public abstract escolherVeiculo(modelo: any): Veiculo
}

class CarroFactory extends AluguelFactory {
  public escolherVeiculo(modelo: any): Veiculo {
    return new Carro(modelo);
  }
}

class MotoFactory extends AluguelFactory {
  public escolherVeiculo(modelo: any): Veiculo {
    return new Moto(modelo);
  }
}

const carro = new CarroFactory().escolherVeiculo('audi');
carro.alugar();
carro.devolver();
```
