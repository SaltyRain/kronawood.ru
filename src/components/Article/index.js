import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import "./style.scss"


const Article = (props) => {
  const {article} = props
  // const imageUrl = props.article.node.featured_media.source_url;
  // console.log(imageUrl);
  // const transformedImage = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "{imageUrl}" }) {
  //       childImageSharp {
  //         # Specify a fixed image and fragment.
  //         # The default width is 400 pixels
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <article className="preview-article">
      <Link to={`/post/${article.node.slug}`}>
        <div className="preview-article__image-container">
          <img src={article.node.featured_media.source_url} alt={article.node.featured_media.alt_text}/>
        </div>
        <div className="preview-article__text-container">
            <h2 className="preview-article__title">
              {article.node.title}
            </h2>
            <div
              className="preview-article__description"
              dangerouslySetInnerHTML={{__html: article.node.excerpt}}
            />
        </div>
      </Link>
    </article>
  )
}

export default Article
