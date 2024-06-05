import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Item from '../Items'
import './index.css'

class Home extends Component {
  state = {loading: true, success: false, fail: false, list: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchdata = await response.json()
      const data = fetchdata.courses.map(each => ({
        id: each.id,
        name: each.name,
        url: each.logo_url,
      }))
      this.setState({list: data, loading: false, success: true, fail: false})
      console.log('hi')
    } else {
      this.setState({loading: false, success: false, fail: true})
    }
  }
  render() {
    const {list, fail, success, loading} = this.state
    return (
      <div className="maincontainer">
        <Header />
        <div className="bodycontainer">
          {loading && (
            <div data-testid="loader" className="loader-con">
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </div>
          )}
          {success && (
            <div>
              <h1>Courses</h1>
              <ul className="unorder">
                {list.map(each => (
                  <Item key={each.id} details={each} />
                ))}
              </ul>
            </div>
          )}

          {fail && (
            <div className="failcontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                alt="failure view"
              />
              <h1>Oops! Something Went wRONG</h1>
              <p>We cannot seem to find the page you are looking for</p>
              <button type="button" onClick={this.getData}>
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
