const filmes = {

  acao: [
    {
      titulo: "John Wick",
      descricao: "Um ex-assassino retorna ao submundo em busca de vingança.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
    },

    {
      titulo: "Mad Max: Estrada da Fúria",
      descricao: "Uma perseguição explosiva em um mundo pós-apocalíptico.",
      poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
    }
  ],

  comedia: [
    {
      titulo: "As Branquelas",
      descricao: "Dois agentes do FBI se disfarçam para resolver um caso.",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/White_chicks.jpg"
    },

    {
      titulo: "Se Beber, Não Case",
      descricao: "Uma despedida de solteiro vira um caos em Las Vegas.",
      poster: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
    }
  ],

  ficcao: [
    {
      titulo: "Interestelar",
      descricao: "Uma missão espacial para salvar a humanidade.",
      poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },

    {
      titulo: "Matrix",
      descricao: "Um hacker descobre a verdade sobre sua realidade.",
      poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    }
  ],

  terror: [
    {
      titulo: "Invocação do Mal",
      descricao: "Investigadores paranormais enfrentam forças malignas.",
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg"
    },

    {
      titulo: "It: A Coisa",
      descricao: "Uma entidade aterrorizante assombra crianças.",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
    }
  ],

  romance: [
    {
      titulo: "Diário de uma Paixão",
      descricao: "Uma história emocionante sobre amor verdadeiro.",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"
    },

    {
      titulo: "Titanic",
      descricao: "Um romance inesquecível a bordo do Titanic.",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg"
    }
  ]
};

function recomendarFilme() {

  const genero = document.getElementById("genero").value;
  const resultado = document.getElementById("resultado");

  if (!genero) {
    alert("Escolha um gênero!");
    return;
  }

  const lista = filmes[genero];

  const filme = lista[Math.floor(Math.random() * lista.length)];

  document.getElementById("titulo").innerText = filme.titulo;

  document.getElementById("descricao").innerText = filme.descricao;

  document.getElementById("poster").src = filme.poster;

  resultado.style.display = "block";
}