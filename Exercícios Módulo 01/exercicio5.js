var usuarios = [{    
  nome: "Diego",    
  habilidades: ["Javascript", "ReactJS", "Redux"]  
},  
{ nome: "Gabriel",    
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
}];

function habilidades (usuarios) {
  for (let user of usuarios) {
    console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}.`);
  }
}

habilidades(usuarios);
//O Diego possui as habilidades: Javascript, ReactJS, ReduxO Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
