import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-list-item">
      <div className="blog-date-container">
        <h1 className="blog-name">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
