# Vue Test Utils com Jest

![image](https://user-images.githubusercontent.com/54965084/132354531-5a608f33-1a19-4456-a382-e2dd49c9597e.png)

![image](https://user-images.githubusercontent.com/54965084/132354614-30f25f3a-201a-4df2-859f-334754db3e39.png)

Projeto criado para exemplificar o uso de testes unitários em Vue usando o Vue Test Utils com Jest. Publicação completa: [Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:6834474964222038016/ 'https://www.linkedin.com/feed/update/urn:li:activity:6834474964222038016/')

#

# Rodando local com container

Para rodar o ambiente de desenvolvimento, pela primeira vez execute:

```
make setup
```

Para rodar o ambiente em modo background:

```
make start
```

Para rodar o ambiente em modo interativo:

```
make start_no_detach
```

Para acessar o terminal interativo do container, rode:

```
make shell
```

Para rodar os testes dentro do container:

```
make run-tests
```

### Porta exposta pelo container: 8081

#

# Rodando local com npm

Para rodar o ambiente de desenvolvimento, pela primeira vez execute:

```
npm install
```

Compilar e rodar o servidor de desenvolvimento:

```
npm run serve
```

Compilar e minificar para produção:

```
npm run build
```

Rodar os testes unitários:

```
npm run test:unit
```
