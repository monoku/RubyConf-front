const contentful = require('../utils/contentful')

const api = {
  homePages: {
    async speakers() {
      const response = await contentful.getEntries({'content_type': 'speakers'})
      return response
    },
    async sponsor() {
      const response = await contentful.getEntries({'content_type': 'sponsor'})
      return response
    },
    async agendaItem() {
      const response = await contentful.getEntries({'content_type': 'agendaItem', order: 'fields.order'})
      return response
    }
  },
  pagesData: {
    async contentPages(page) {
      const response = await contentful.getEntries({'content_type': 'contentPage','fields.slug': page})
      return response
    }
  },
  news: {
    async contentPages(page) {
      const response = await contentful.getEntries({'content_type': 'post'})
      return response
    },
    async contentPagesSlug(page) {
      const response = await contentful.getEntries({'content_type': 'post','fields.slug': page})
      return response
    }
  }
}
/**
 * Objecto con la servicio para hacer petición.
 */
export default api
