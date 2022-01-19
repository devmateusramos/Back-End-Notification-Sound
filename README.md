# Back-End-Notification-Sound

O objetivo é que possa ser adicionado novos sons via API para notificação dos pedidos que são feitos no ecommerce

Então usei o Multer pra receber o file MP3, mas não fiz nada que impedisse que enviassem outro tipo de file, tipei com any, uma dúvida que tô é se pode deixar assim por ser interno só vai ter o mesmo front end consumindo ou é melhor eu ver uma forma de assegurar que dê erro se alguem passar um arquivo sem ser mp3?

Tem 3 rotas que estão em cada useCase: 
----------------------------
importSound:
Usa o multer pra receber o arquivo via Post e adiciona o nome do arquivo na tabela sounds, e o arquivo mp3 é adiciona na pasta que está na raiz chamada Sounds. É melhor assim mesmo ou devia por ele no Banco de Dados direto? Tinha pesquisado e visto que não era muito comum colocarem no Banco de dados o arquivo.

-----------------------------

getSoundName: Lista todos os sounds pelo name que estão na tabela sounds, mas no momento retorna id e o created_at, pensei de retornar tudo pra decidir como exibir no front quando for consumir, mas não sei se está bom.

----------------------------
pickSound: Aqui recebe um post passando no json o name do sound que pode ser adquirido pelo getSoundName, e retorna o path desse mp3, minha dúvida se tudo bem retornar o path ou era melhor retornar o arquivo? Como o front end tem o mesmo Back End pensei que poderia retornar só o path.

----------------------------
O resto de definir duração essas coisas pensei de deixar valores pré-definidos disso no front-end e usar talvez algo do css pra definir isso ou coisas que faria só na hora de consumir no front end.

----------------------------
Também fiquei na dúvida se era pra fazer isso mesmo ou só ter sons pré definidos sem a pessoa adicionar.

----------------------------
Como estou sem conseguir rodar a plataforma se isso estiver bom, Pensei defazer só um component em um simples dashboard pro front end consumindo essa API e fazendo as modificações final, que depois seria só copiar pro dashboard de admin esse component. pode ser assim por enquanto?

----------
Vi agora que esqueci de por a pasta Sounds no gitignore, talvez deixar uma anotação pra por quando for passar pro Hust caso não seja bom subir os file mp3 pro github
