import React, { Component } from "react"
import classnames from "classnames"
import { Button } from "reactstrap"
import { ContextLayout } from "../../utility/context/Layout"
import { connect } from "react-redux"
import Hammer from "react-hammerjs"
import SideMenuContent from "./sidemenu/SideMenuContent"
import PerfectScrollbar from "react-perfect-scrollbar"
import Media from 'react-media';
import { Menu, X } from "react-feather"

class Sidebar extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.activePath !== state.activeItem) {
      return {
        activeItem: props.activePath
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    width: window.innerWidth,
    activeIndex: null,
    hoveredMenuItem: null,
    activeItem: this.props.activePath,
    menuShadow: false,
    ScrollbarTag: PerfectScrollbar,
    menuState:false
  }

  mounted = false

  updateWidth = () => {
    if (this.mounted) {
      this.setState(prevState => ({
        width: window.innerWidth
      }))
      this.checkDevice()
    }
  }

  componentDidMount() {
    this.mounted = true
    if (this.mounted) {
      if (window !== "undefined") {
        // window.addEventListener("resize", this.updateWidth, false)
      }
      this.checkDevice()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  checkDevice = () => {
    var prefixes = " -webkit- -moz- -o- -ms- ".split(" ")
    var mq = function(query) {
      return window.matchMedia(query).matches
    }

    if ("ontouchstart" in window || window.DocumentTouch) {
      this.setState({
        ScrollbarTag: "div"
      })
    } else {
      this.setState({
        ScrollbarTag: PerfectScrollbar
      })
    }
    var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("")
    return mq(query)
  }

  changeActiveIndex = id => {
    if (id !== this.state.activeIndex) {
      this.setState({
        activeIndex: id
      })
    } else {
      this.setState({
        activeIndex: null
      })
    }
  }

  handleSidebarMouseEnter = id => {
    if (id !== this.state.hoveredMenuItem) {
      this.setState({
        hoveredMenuItem: id
      })
    } else {
      this.setState({
        hoveredMenuItem: null
      })
    }
  }

  handleActiveItem = url => {
    this.setState({
      activeItem: url
    })
  }


  render() {
    let {
      visibilityState,
      // sidebarHover,
      sidebarVisibility,
      activeTheme,
      activePath,
      sidebarState,
      currentLang,
      permission,
      currentUser,
      collapsedMenuPaths
    } = this.props

    let {
      menuShadow,
      activeIndex,
      hoveredMenuItem,
      activeItem,
      ScrollbarTag
    } = this.state
    let scrollShadow = (container, dir) => {
      if (container && dir === "up" && container.scrollTop >= 100) {
        this.setState({ menuShadow: true })
      } else if (container && dir === "down" && container.scrollTop < 100) {
        this.setState({ menuShadow: false })
      } else {
        return
      }
    }
    return (
      <ContextLayout.Consumer>

      
        {context => {
          let dir = context.state.direction
          return (
              
            <React.Fragment>
              <style dangerouslySetInnerHTML={{__html: `
                .sports-sidebar-menu.main-menu-content{
                  height: 100% !important;
                  width:  100% !important;
                }
              `}}></style>
                
              <Hammer
                onSwipe={e => {
                  sidebarVisibility()
                }}
                direction={
                  dir === "rtl" ? "DIRECTION_LEFT" : "DIRECTION_RIGHT"
                }>
                <div className="menu-swipe-area d-xl-none d-block vh-100"></div>
              </Hammer>
              <Media queries={{
                    small: "(max-width: 800px)",
                    large: "(min-width: 801px)"
                    }}>
                    {matches => (
                        <React.Fragment>
                        {matches.small && 
                          <>
                              <Button.Ripple
                                style={{zIndex:1000, position:'fixed', bottom:'10px', right:'10px'}}
                                onClick={()=>this.setState({menuState:!this.state.menuState})} 
                                className="btn-icon rounded-circle"
                                color="primary"
                              >
                                {this.state.menuState?<X size={20} />:<Menu size={20} />}
                              </Button.Ripple>
                              <div
                                style ={{zIndex : 10,height:"calc(100% - 79x)", width:'calc(100% - 80px)', display: this.state.menuState?'block':'none'}}
                                  className={classnames(
                                    `main-menu menu-light profile-menu menu-accordion theme-${activeTheme}`,
                                    {
                                      collapsed: sidebarState === true,
                                      "hide-sidebar":
                                        this.state.width < 0 && visibilityState === false
                                    }
                                  )}
                                  // onMouseEnter={() => sidebarHover(false)}
                                  // onMouseLeave={() => sidebarHover(true)}
                                  >
                                <ScrollbarTag
                                  className={classnames("sports-sidebar-menu main-menu-content", {
                                    "overflow-hidden": ScrollbarTag !== "div",
                                    "overflow-scroll": ScrollbarTag === "div"
                                  })}
                                  {...(ScrollbarTag !== "div" && {
                                    options: { wheelPropagation: false },
                                    onScrollDown: container => scrollShadow(container, "down"),
                                    onScrollUp: container => scrollShadow(container, "up"),
                                    onYReachStart: () =>
                                      menuShadow === true &&
                                      this.setState({ menuShadow: false })
                                  })}>
                                  <Hammer
                                    onSwipe={() => {
                                      sidebarVisibility()
                                    }}
                                    direction={
                                      dir === "rtl" ? "DIRECTION_RIGHT" : "DIRECTION_LEFT"
                                    }>
                                    <ul className="navigation navigation-main">
                                      <SideMenuContent
                                        setActiveIndex={this.changeActiveIndex}
                                        activeIndex={activeIndex}
                                        hoverIndex={hoveredMenuItem}
                                        handleSidebarMouseEnter={this.handleSidebarMouseEnter}
                                        activeItemState={activeItem}
                                        handleActiveItem={this.handleActiveItem}
                                        activePath={activePath}
                                        lang={currentLang}
                                        permission={permission}
                                        currentUser={currentUser}
                                        collapsedMenuPaths={collapsedMenuPaths}
                                        toggleMenu={sidebarVisibility}
                                        deviceWidth={this.props.deviceWidth}
                                      />
                                    </ul>
                                  </Hammer>
                                </ScrollbarTag>
                              </div>
                          </>
                        }
                        {matches.large &&
                          <>
                              <div
                                style ={{zIndex : 10,height:"calc(100% - 85px)"}}
                                  className={classnames(
                                    `main-menu menu-light profile-menu menu-accordion theme-${activeTheme}`,
                                    {
                                      collapsed: sidebarState === true,
                                      "hide-sidebar":
                                        this.state.width < 0 && visibilityState === false
                                    }
                                  )}
                                  // onMouseEnter={() => sidebarHover(false)}
                                  // onMouseLeave={() => sidebarHover(true)}
                                  >
                                <ScrollbarTag
                                  className={classnames("sports-sidebar-menu main-menu-content", {
                                    "overflow-hidden": ScrollbarTag !== "div",
                                    "overflow-scroll": ScrollbarTag === "div"
                                  })}
                                  {...(ScrollbarTag !== "div" && {
                                    options: { wheelPropagation: false },
                                    onScrollDown: container => scrollShadow(container, "down"),
                                    onScrollUp: container => scrollShadow(container, "up"),
                                    onYReachStart: () =>
                                      menuShadow === true &&
                                      this.setState({ menuShadow: false })
                                  })}>
                                  <Hammer
                                    onSwipe={() => {
                                      sidebarVisibility()
                                    }}
                                    direction={
                                      dir === "rtl" ? "DIRECTION_RIGHT" : "DIRECTION_LEFT"
                                    }>
                                    <ul className="navigation navigation-main">
                                      <SideMenuContent
                                        setActiveIndex={this.changeActiveIndex}
                                        activeIndex={activeIndex}
                                        hoverIndex={hoveredMenuItem}
                                        handleSidebarMouseEnter={this.handleSidebarMouseEnter}
                                        activeItemState={activeItem}
                                        handleActiveItem={this.handleActiveItem}
                                        activePath={activePath}
                                        lang={currentLang}
                                        permission={permission}
                                        currentUser={currentUser}
                                        collapsedMenuPaths={collapsedMenuPaths}
                                        toggleMenu={sidebarVisibility}
                                        deviceWidth={this.props.deviceWidth}
                                      />
                                    </ul>
                                  </Hammer>
                                </ScrollbarTag>
                              </div>
                          </>
                        }
                        </React.Fragment>
                    )}
                </Media>
            </React.Fragment>
          )
        }}
      </ContextLayout.Consumer>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.login.userRole
  }
}

export default connect(mapStateToProps)(Sidebar)
