import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get, isEqual, upperFirst } from 'lodash'
import {
  bindDiscoverKey,
  getCategories,
  loadCategoryPosts,
  // loadCommunities,
  loadDiscoverPosts,
  loadDiscoverUsers,
  // loadFeaturedUsers,
} from '../actions/discover'
import { setLastDiscoverBeaconVersion } from '../actions/gui'
import { trackEvent } from '../actions/tracking'
import { Discover } from '../components/views/Discover'

const BEACON_VERSION = '1'

export function getDiscoverAction(type) {
  switch (type) {
    // case 'communities':
    //   return loadCommunities()
    // case 'featured-users':
    //   return loadFeaturedUsers()
    case 'featured':
    case 'recommended':
      return loadCategoryPosts()
    case 'recent':
      return loadDiscoverPosts(type)
    case 'trending':
      return loadDiscoverUsers(type)
    case 'all':
      return getCategories()
    default:
      return loadCategoryPosts(type)
  }
}

export function generateTabs(primary, secondary, tertiary) {
  const tabs = []
  // add featured/trending/recent by default
  tabs.push({
    to: '/discover',
    children: 'Featured',
    activePattern: /^\/(?:discover(\/featured|\/recommended)?)?$/,
  })
  tabs.push({
    to: '/discover/trending',
    children: 'Trending',
  })
  tabs.push({
    to: '/discover/recent',
    children: 'Recent',
  })
  // add line to split categories
  tabs.push({ kind: 'divider' })
  for (const category of primary) {
    tabs.push({
      to: `/discover/${category.slug}`,
      children: category.name,
    })
  }
  for (const category of secondary) {
    tabs.push({
      to: `/discover/${category.slug}`,
      children: category.name,
    })
  }
  for (const category of tertiary) {
    tabs.push({
      to: `/discover/${category.slug}`,
      children: category.name,
    })
  }
  return tabs
}

export class DiscoverContainer extends Component {

  static propTypes = {
    coverDPI: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    isBeaconActive: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    pageTitle: PropTypes.string,
    paramsType: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    promotions: PropTypes.array,
    primary: PropTypes.array,
    secondary: PropTypes.array,
    tertiary: PropTypes.array,
  }

  static defaultProps = {
    paramsType: 'featured',
  }

  static preRender = (store, routerState) => {
    const discoverAction = getDiscoverAction(routerState.params.type || 'featured')
    const categoryAction = getCategories()
    return (
      Promise.all([
        store.dispatch(discoverAction),
        store.dispatch(categoryAction),
      ])
    )
  }

  componentWillMount() {
    this.state = { primaryIndex: undefined }
    const { dispatch, paramsType } = this.props
    dispatch(bindDiscoverKey(paramsType))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEqual(this.props.promotions, nextProps.promotions)) return true
    if (isEqual(nextProps, this.props) && isEqual(nextState, this.state)) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    const { dispatch, paramsType } = this.props
    dispatch(bindDiscoverKey(paramsType))
  }

  onClickTrackCredits = () => {
    const { dispatch } = this.props
    dispatch(trackEvent('banderole-credits-clicked'))
  }

  onDismissZeroStream = () => {
    const { dispatch } = this.props
    dispatch(setLastDiscoverBeaconVersion({ version: BEACON_VERSION }))
  }

  render() {
    const { coverDPI, isBeaconActive, isLoggedIn, pageTitle, paramsType,
            pathname, promotions, primary, secondary, tertiary } = this.props
    const props = {
      coverDPI,
      isBeaconActive,
      isLoggedIn,
      onClickTrackCredits: this.onClickTrackCredits,
      onDismissZeroStream: this.onDismissZeroStream,
      pageTitle,
      pathname,
      promotions,
      streamAction: getDiscoverAction(paramsType),
      tabs: generateTabs(primary, secondary, tertiary),
    }
    return <Discover key={`discover_${paramsType}`} {...props} />
  }
}

function sortCategories(a, b) {
  if (a.order < b.order) {
    return -1
  } else if (a.order > b.order) {
    return 1
  }
  return 0
}

function mapStateToProps(state, ownProps) {
  const { authentication, gui, json } = state
  const { isLoggedIn } = authentication
  const result = get(json, 'pages.all-categories')
  const categories = []
  if (result) {
    for (const id of result.ids) {
      if (get(state.json, [result.type, id])) {
        categories.push(get(json, [result.type, id]))
      }
    }
  }
  const paramsType = ownProps.params.type
  let primary = []
  let secondary = []
  let tertiary = []
  let pageTitle = null
  if (categories && categories.length) {
    for (const category of categories) {
      if (category.slug === paramsType) {
        pageTitle = category.name
      }
      switch (category.level) {
        case 'primary':
          primary.push(category)
          break
        case 'secondary':
          secondary.push(category)
          break
        case 'tertiary':
          tertiary.push(category)
          break
        default:
          break
      }
    }
    if (!pageTitle) {
      switch (paramsType) {
        case 'all':
          break
        case undefined:
        case 'recommended':
          pageTitle = 'Featured'
          break
        default:
          pageTitle = upperFirst(paramsType)
          break
      }
    }
    primary = primary.sort(sortCategories)
    secondary = secondary.sort(sortCategories)
    tertiary = tertiary.sort(sortCategories)
  }
  return {
    coverDPI: gui.coverDPI,
    isBeaconActive: isLoggedIn && gui.lastDiscoverBeaconVersion !== BEACON_VERSION,
    isLoggedIn,
    pageTitle,
    paramsType,
    pathname: ownProps.location.pathname,
    promotions: isLoggedIn ? state.promotions.loggedIn : state.promotions.loggedOut,
    primary,
    secondary,
    tertiary,
  }
}

export default connect(mapStateToProps)(DiscoverContainer)

