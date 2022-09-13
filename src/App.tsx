import { useState } from 'react'
import { Header } from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/60726674?v=4',
      name: 'Felipe Santos Lopes',
      role: 'Developer at Compsis'
    },
    content: [
      { type: 'paragraph', content: 'Eai guys' },
      { type: 'paragraph', content: 'Hoje vim fazer o review do Chrono trigger, jogo que eu amei zerar, espero que vcs gostem 🙊' },
      { type: 'link', content: '⏳ cusco.review/crono' },

    ],
    publishedAt: new Date('2022-09-12 20:00:03')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1387247512231239682/RvrfKhCb_400x400.jpg',
      name: 'Gabriel da Silva Jochims',
      role: 'CEO at Gebra Corp'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha 🤟' },
      { type: 'paragraph', content: 'Acabei de subir mais um cusco Review, foi o segundo, esse é muito especial, é sobre um dos meus animes favoritos, sobre amizade, confianca, e frutas do diabo' },
      { type: 'link', content: '👉 cusco.review/onepiece' },

    ],
    publishedAt: new Date('2022-08-21 13:00:03')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Juhza.png',
      name: 'Julia Beatriz Adão',
      role: 'Software Developer at Qualyteam'
    },
    content: [
      { type: 'paragraph', content: 'Buenas pessoal,' },
      { type: 'paragraph', content: 'Estou fazendo uma vaquinha para ajudar gatos de rua, estamos quase batendo nossa meta! para ajudar basta clicar no link' },
      { type: 'paragraph', content: 'para ajudar basta clicar no link' },
      { type: 'link', content: '🐱 cusco.review/vakinhadaju' },

    ],
    publishedAt: new Date('2022-09-09 11:44:32')
  },
]
function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
