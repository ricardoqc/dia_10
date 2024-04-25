import http from 'http'
import { PORT } from './config.js'
import { getUsuarios } from './controller.js'

export const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET') {
    switch (url) {
      case '/':
        // Página principal
        break
      case '/api/usuarios':
        // Datos de usuarios
        getUsuarios(req, res)
        break

      default:
        res.writeHead(404, { 'Content-type': 'application/json' })
        res.end(JSON.stringify({ message: 'Página no encontrada' }))
        break
    }
  }

  if (method === 'POST') {
    // Lógica para POST
  }
})

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
