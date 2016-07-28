import React, { PropTypes } from 'react'
import Promotion from '../assets/Promotion'
import StreamContainer from '../../containers/StreamContainer'
import { CategoryTabBar } from '../tabs/CategoryTabBar'
import { MainView } from '../views/MainView'
import { ZeroStream } from '../zeros/Zeros'

const DiscoverZeroStream = ({ onDismissZeroStream }) =>
  <ZeroStream onDismiss={onDismissZeroStream}>
    Explore creators and communities. Realize the promise of the internet.
  </ZeroStream>

DiscoverZeroStream.propTypes = {
  onDismissZeroStream: PropTypes.func.isRequired,
}

export const Discover = ({
    coverDPI,
    isBeaconActive,
    isLoggedIn,
    onClickTrackCredits,
    onDismissZeroStream,
    pageTitle,
    pathname,
    promotion,
    streamAction,
    tabs,
  }) =>
  <MainView className="Discover">
    {isBeaconActive ? <DiscoverZeroStream onDismissZeroStream={onDismissZeroStream} /> : null}
    <Promotion
      coverDPI={coverDPI}
      creditsClickAction={onClickTrackCredits}
      isLoggedIn={isLoggedIn}
      promotion={promotion}
    />
    <CategoryTabBar pathname={pathname} tabs={tabs} />
    {pageTitle ? <h1 className="DiscoverPageTitle">{pageTitle}</h1> : null}
    <StreamContainer action={streamAction} />
  </MainView>

Discover.propTypes = {
  coverDPI: PropTypes.string.isRequired,
  isBeaconActive: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onClickTrackCredits: PropTypes.func.isRequired,
  onDismissZeroStream: PropTypes.func.isRequired,
  pageTitle: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  promotion: PropTypes.object,
  streamAction: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired,
}

