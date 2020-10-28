import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './building-content.module.css'

function BuildingContent (props) {
  const {_rawBody, title, _updatedAt, documents} = props

  const {format} = require('date-fns')
  const updatedDate = format(_updatedAt, 'YYYY/MM/DD')
  console.log('>>>>> documents: ', documents, updatedDate);


  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <div>Updated on: {updatedDate}</div>
            {_rawBody && <PortableText blocks={_rawBody} />}

            {/* document part */}
            {documents && documents.length ? (<table className={styles.documentPart}>
              <thead>
                <tr>
                    <th className={styles.thFirst}>Order</th>
                    <th>Files</th>
                </tr>
              </thead>

              <tbody>
                {documents.map((row, index) => (
                  <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>
                      <a href={row.asset.url} target='_blank'>{row.asset.originalFilename}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>) : ''}
          </div>

          {/* <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside> */}

        </div>
      </Container>
    </article>
  )
}

export default BuildingContent
