import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Actions from '../action'
import ThemeContext from '../hooks/themeContext'
import THEMECONFIG from '../utils/themeConstants'
import ComponentView from '../container/componentView'

function IndexView(props) {
  const { data, initApplicationAction } = props
  const appTheme = data.get('appTheme')
  let themeConfig = THEMECONFIG[appTheme]

  useEffect(() => {
    initApplicationAction()
  }, [])

  return (
    <ThemeContext.Provider value={{ name: appTheme, config: themeConfig }}>
      <div className={`component-${appTheme} component-view`}>
        <ComponentView />
      </div>
    </ThemeContext.Provider>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  }
}

const mapDispatchToProps = {
  initApplicationAction: Actions.initApplication
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexView)

