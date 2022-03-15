# Back-End-Notification-Sound

O objetivo é que possa ser adicionado novos sons via API para notificação dos pedidos que são feitos no ecommerce

Então usei o Multer pra receber o file MP3.

Tem 3 rotas que estão em cada useCase: 
----------------------------
importSound:
Usa o multer pra receber o arquivo via Post e adiciona o nome do arquivo na tabela sounds, e o arquivo mp3 é adicionado na pasta que está na raiz chamada sounds. Tinhavisto que não era muito comum colocarem no Banco de dados o arquivo.

-----------------------------

getSoundName: Lista todos os sounds pelo name que estão na tabela sounds

----------------------------
pickSound: Aqui recebe um post passando no json o name do sound que pode ser adquirido pelo getSoundName, e retorna o path desse mp3

----------------------------
O resto de definir duração essas coisas pensei de deixar valores pré-definidos disso no front-end e usar talvez algo do css pra definir isso ou coisas que faria só na hora de consumir no front end.

----------------------------

