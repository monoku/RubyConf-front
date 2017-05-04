const contentful = require('contentful')

const SPACE_ID = 'js70qft2lmn9'
const ACCESS_TOKEN = '7d0817831ce4ff18d7ae04cae904a5589477cb7100740a5d0520770521215822'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

export const getEntries = (settings) => {
  return new Promise((resolve, reject) => {
    client.getEntries(settings)
      .then((response) => {
        resolve(response)
    })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getEntry = (settings) => {
  return new Promise((resolve, reject) => {
    client.getEntry(settings)
      .then((response) => {
        resolve(response)
    })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getEntries,
  getEntry
}
