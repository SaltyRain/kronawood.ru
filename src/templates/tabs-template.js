import React from 'react'
import Layout from "../components/Layout"

import Tabs from "../components/Tabs"

export default ({pageContext}) => {
  const regexp = /<h2>([\s\S]*?)<\/h2>/g;
  const contentRegExp = /<\/h2>([\s\S]*?)<h2>/g;

  let headings = pageContext.content.match(regexp);
  let inners = pageContext.content.match(contentRegExp);

  let modifiedHeadings = headings.map(heading => {
    return heading.substring(4, heading.length - 5);
  });
  let modifiedInners = inners.map(inner => {
    return inner.substring(5, inner.length - 4);
  });
  //
  // const tabsItems = modifiedHeadings.map((heading) =>
  //   <div label = {heading}>
  //     <div dangerouslySetInnerHTML={modifiedInners}></div>
  //   </div>
  // );
  // console.log(modifiedHeadings);
  // console.log(modifiedInners);

 return (
  <Layout>
    <div className="container">
      <h1 className="visually-hidden" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      {/*<div dangerouslySetInnerHTML={{ __html: pageContext.content }}/>*/}
      <Tabs>
        <div label={modifiedHeadings[0]}>
          <div dangerouslySetInnerHTML={{ __html: modifiedInners[0]}}></div>
        </div>
        <div label={modifiedHeadings[1]}>
          <div dangerouslySetInnerHTML={{ __html: modifiedInners[1]}}></div>
        </div>
        <div label={modifiedHeadings[2]}>
          <div dangerouslySetInnerHTML={{ __html: modifiedInners[2]}}></div>
        </div>
        <div label={modifiedHeadings[3]}>
          <div dangerouslySetInnerHTML={{ __html: modifiedInners[3]}}></div>
        </div>
        <div label={modifiedHeadings[4]}>
          <div dangerouslySetInnerHTML={{ __html: modifiedInners[4]}}></div>
        </div>
      </Tabs>
    </div>
  </Layout>
 )
}

