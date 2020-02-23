import gql from 'graphql-tag'


export const GET_RANDOM_WORDS = gql`
  query randomWords($categoryId: ID, $limit: Int) {
    randomWords(categoryId: $categoryId, limit: $limit) {
      _id
      name
      category {
        _id
        name
        color
      }
    }
  }
`