// Write your code here
import {Component} from 'react'

import './index.css'

import SocialMediaSection from '../SocialMediaSection'

import NavBar from '../NavBar'

import ProjectsSection from '../ProjectsSection'

import HomeSection from '../HomeSection'

import AboutSection from '../AboutSection'

import ContactSection from '../ContactSection'

class Portfolio extends Component {
  state = {displayable: 0}

  onSelect = id => {
    this.setState({displayable: id})
  }

  renderBodySection = displayable => {
    switch (displayable) {
      case 0:
        this.value = <HomeSection />
        break
      case 1:
        this.value = <AboutSection />
        break
      case 2:
        this.value = <ProjectsSection />
        break
      case 3:
        this.value = <ContactSection />
        break
      default:
        this.value = <HomeSection />
        break
    }
    return this.value
  }

  render() {
    const {displayable} = this.state
    return (
      <div className="main-container">
        <NavBar onSelect={this.onSelect} selectedId={displayable} />
        <div className="body-container">
          {this.renderBodySection(displayable)}
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
