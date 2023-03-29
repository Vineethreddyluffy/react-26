import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    idOf: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    name: 'Wade Warren',
    company: 'Rang',
    desc:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  }

  onRightButton = () => {
    const {idOf} = this.state
    const {reviewsList} = this.props
    const len = reviewsList.length
    if (idOf >= 0 && idOf < len - 1) {
      const newArr = reviewsList.filter(each => each.id === idOf + 1)
      this.setState({
        idOf: idOf + 1,
        url: newArr[0].imgUrl,
        name: newArr[0].username,
        company: newArr[0].companyName,
        desc: newArr[0].description,
      })
    }
  }

  onLeftButton = () => {
    const {idOf} = this.state
    const {reviewsList} = this.props
    const len = reviewsList.length
    if (idOf > 0 && idOf <= len) {
      const newArr = reviewsList.filter(each => each.id === idOf - 1)
      this.setState({
        idOf: idOf - 1,
        url: newArr[0].imgUrl,
        name: newArr[0].username,
        company: newArr[0].companyName,
        desc: newArr[0].description,
      })
    }
  }

  render() {
    const {url, name, company, desc} = this.state
    return (
      <div className="comp">
        <div className="cont">
          <button
            type="button"
            onClick={this.onLeftButton}
            data-testid="leftArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="image"
            />
          </button>
          <div className="card">
            <h1 className="heading">Reviews</h1>
            <img src={url} alt={name} />
            <p className="para">{name}</p>
            <p className="para1">{company}</p>
            <p className="para1">{desc}</p>
          </div>
          <button
            type="button"
            onClick={this.onRightButton}
            data-testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="image"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
