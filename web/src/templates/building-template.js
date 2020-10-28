import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BuildingContent from '../components/building-content'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query BuildingTemplateQuery($id: String!) {
    post: sanityBuilding(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
      documents {
        asset {
          url
          originalFilename
        }
      }
      _updatedAt
    }
  }
`

const BuildingTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {/* {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />} */}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BuildingContent {...post} />}
    </Layout>
  )
}

export default BuildingTemplate
