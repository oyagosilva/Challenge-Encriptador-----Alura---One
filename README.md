Decodificador de Texto - Oracle Next Education


Boas vindas ao primeiro desafio!

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:

Deve funcionar apenas com letras minúsculas
Não devem ser utilizados letras com acentos nem caracteres especiais
Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções O resultado deve ser exibido na tela.

Extras:

Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.
Funcionalidades adicionais que eu desenvolvi pra agregar ao projeto:

Validação automática do texto digitado no textarea para permitir apenas letras minúsculas e espaçamentos. Acentuações, caracteres especiais e números, não serão aceitas mesmo que o usuário tente inserir esses caracteres, garantindo a funcionalidade da aplicação, evitando bugs e mensagens de erro pro usuário final. Pra melhorar a experiência, caracteres com acentuação e em letra maiúsculas são substituídos por caracteres válidos ao invés de serem removidos. Ex: ã -> a, A -> a, Á -> a. Se não houver substituição válida o caractere é removido da textarea.
Ao descriptografar, verificar se existe uma mensagem criptografada no texto, caso não tenha mensagem criptografada, exibir mensagem informando que nenhuma mensagem foi encontrada, caso tenha mensagem criptografada, seguir o fluxo normal da descriptografia. (Apenas no modo alura)
Animações nos botões para melhorar a experiência do usuário.
Mensagem de feedback informando que o texto foi copiado para área de transferência, dentro da aplicação ou em uma modal.
Design responsivo em qualquer dimensão
Mensagem de feedback depois de copiar o texto
Animações pra melhorar a experiência de usuário
O textarea se comporta de forma diferente de acordo com o dispositivo usado, de acordo com o protótipo. No desktop mantém seu tamanho fixo, adicionando uma barra de rolagem no conteúdo quando necessário. Em tablets e dispositivos móveis o textarea ajusta sua altura automaticamente pra caber o conteúdo adicional sem exibir barra de rolagem.
Clicando na logo da aplicação é possível alternar os modos de criptografia "alura" e "cesar", permitindo que o usuario escolha entre usar o método de criptografia da alura ou o método de criptografia da cifra de césar.

Deploy: https://oyagosilva.github.io/Challenge-Encriptador-----Alura---One/

Figma: https://www.figma.com/file/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?node-id=0-1&t=rR60uE6zm5i8mpoq-0
