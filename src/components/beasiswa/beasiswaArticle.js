import './beasiswaArticle.css'

function BeasiswaArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <img className='news__img' src={data.urlToImage} alt={data.urlToImage} />
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default BeasiswaArticle;