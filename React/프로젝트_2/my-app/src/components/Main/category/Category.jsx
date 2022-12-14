import './category.css'

export default function Category({category}) {
  return (
    <dl class="category">
      <dt class="a11y-hidden">Category</dt>
      {category.map((item, index) => <dd key={index}>{item}</dd>)}
    </dl>
  )
}
