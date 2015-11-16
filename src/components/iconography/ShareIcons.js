import React from 'react'
import classNames from 'classnames'
import { SVGShareBox } from './SVGComponents'

export class MailIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('TestIcon')}>
        <path d="M0 0h60v60h-60z" />
        <polygon points="20.724,25.067 20.724,34.632 26.574,29.605" />
        <polygon points="33.426,29.605 39.277,34.632 39.277,25.066" />
        <path d="M29.617,31.964l-2.034-1.578l-5.173,4.444h15.18l-5.173-4.444l-2.034,1.578 C30.158,32.139,29.842,32.139,29.617,31.964z" />
        <polygon points="30,30.68 38.451,24.125 21.549,24.125" />
      </SVGShareBox>
    )
  }
}

export class FacebookIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('FacebookIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M31.3 38h-3.5v-8h-1.8v-2.8h1.8v-1.7c0-2.2 1-3.6 3.8-3.6h2.4v2.8h-1.5c-1.1 0-1.2.4-1.2 1.1v1.4h2.7l-.3 2.8h-2.4v8z" />
      </SVGShareBox>
    )
  }
}

export class TwitterIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('TwitterIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M40 23.9c-.7.3-1.5.5-2.4.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.5-4.2-.4.6-.6 1.3-.6 2 0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.7-5.1 1.7-.3 0-.7 0-1-.1 1.8 1.1 4 1.8 6.3 1.8 7.8.1 12-6.1 12-11.4v-.5c.8-.6 1.5-1.3 2-2.1z" />
      </SVGShareBox>
    )
  }
}

export class PinterestIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('PinterestIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M30 21c-5 0-9 4-9 9 0 3.7 2.2 6.8 5.4 8.2 0-.6 0-1.4.2-2.1.2-.7 1.2-4.9 1.2-4.9s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2.1-.8 3.2-.2 1 .5 1.7 1.4 1.7 1.7 0 2.9-2.2 2.9-4.8 0-2-1.3-3.4-3.7-3.4-2.7 0-4.4 2-4.4 4.3 0 .8.2 1.3.6 1.8.2.2.2.3.1.5 0 .2-.1.6-.2.7-.1.2-.2.3-.5.2-1.3-.5-1.8-1.9-1.8-3.4 0-2.6 2.2-5.6 6.4-5.6 3.4 0 5.7 2.5 5.7 5.2 0 3.5-2 6.2-4.9 6.2-1 0-1.9-.5-2.2-1.1 0 0-.5 2.1-.6 2.5-.2.7-.6 1.4-.9 1.9.8.2 1.7.4 2.5.4 5 0 9-4 9-9 0-5.2-4-9.2-9-9.2z" />
      </SVGShareBox>
    )
  }
}

export class GooglePlusIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('GooglePlusIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M38 25v-3h-1v3h-3v1h3v3h1v-3h3v-1zM32.2 21h-5s-4.8.1-4.8 4.4c0 4.3 4.7 3.8 4.7 3.8v1.1c0 .4.4.3.4 1.2-.3 0-6.4-.2-6.4 3.8 0 3.9 5.2 3.7 5.2 3.7s6 .3 6-4.6c0-2.9-3.4-3.8-3.4-5 0-1.2 2.6-1.5 2.6-4.3 0-1.7-.2-2.6-1.5-3.2-.1-.4 2.2-.1 2.2-.9zm-1.6 13.8c.1 1.5-1.5 2.9-3.6 3-2.1.1-3.8-1-3.9-2.5-.1-1.5 1.5-2.9 3.6-3 2-.2 3.8.9 3.9 2.5zm-3.1-6.6c-1.2.3-2.6-.8-3.1-2.5s.1-3.4 1.4-3.7c1.2-.3 2.6.8 3.1 2.5s-.2 3.4-1.4 3.7z" />
      </SVGShareBox>
    )
  }
}

export class TumblrIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('TumblrIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M30.6 22v4h3.9v2.5h-3.9v4.1c0 .9 0 1.5.1 1.8.1.3.3.5.6.6.4.2.8.3 1.2.3.8 0 1.6-.3 2.5-.8v2.5c-.7.3-1.3.5-1.9.7-.6.1-1.2.2-1.8.2-.7 0-1.4-.1-2-.3-.6-.2-1.1-.4-1.5-.8-.4-.3-.7-.7-.8-1.1-.2-.4-.2-.9-.2-1.7v-5.6h-1.8v-2.3c.6-.2 1.2-.5 1.6-.9.5-.4.8-.8 1.1-1.4.3-.5.5-1.2.6-2h2.3z" />
      </SVGShareBox>
    )
  }
}

export class RedditIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('RedditIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M38.1 22c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6-.8 0-1.6.7-1.6 1.6zm-.1-.9l-5.4-1.1c-.2 0-.5.1-.5.3l-2.1 5.7h1l1.8-5.1 5 1 .2-.8zm-18.9 11.4c.4-1.5 1.5-2.9 3-4-.4-.4-1-.6-1.6-.6-1.4 0-2.5 1.1-2.5 2.5 0 .8.4 1.6 1.1 2.1zm22.5 1.3c0-3.9-4.9-7-10.9-7s-10.9 3.1-10.9 7 4.9 7 10.9 7 10.9-3.1 10.9-7zm1.9-3.4c0-1.4-1.1-2.5-2.5-2.5-.6 0-1.2.3-1.7.7 1.5 1.1 2.6 2.5 3 4 .7-.5 1.2-1.3 1.2-2.2z" />
        <circle cx="34.7" cy="32.4" r="1.7" />
        <circle cx="26.7" cy="32.4" r="1.7" />
        <path d="M34.4 36.9c-.7.7-1.9 1.1-3.6 1.1-1.7 0-2.9-.3-3.6-1.1-.2-.2-.4-.2-.6 0s-.2.4 0 .6c.9.9 2.2 1.3 4.2 1.3 1.9 0 3.3-.4 4.2-1.3.2-.2.2-.4 0-.6-.2-.1-.5-.1-.6 0z" />
      </SVGShareBox>
    )
  }
}

export class LinkedInIcon extends React.Component {
  render() {
    return (
      <SVGShareBox className={classNames('LinkedInIcon')}>
        <path d="M0 0h60v60h-60z" />
        <path d="M25.9 38v-10.8h-3.6v10.8h3.6zm-1.9-12.3c1.3 0 2.1-.8 2.1-1.9 0-1.1-.8-1.9-2-1.9s-2.1.8-2.1 1.9c0 1.1.8 1.9 2 1.9zM27.9 38h3.6v-6c0-.3 0-.6.1-.9.3-.6.9-1.3 1.9-1.3 1.3 0 1.8 1 1.8 2.4v5.8h3.7v-6.2c0-3.3-1.8-4.9-4.2-4.9-2 0-2.8 1.1-3.3 1.8v-1.6h-3.6v10.9z" />
      </SVGShareBox>
    )
  }
}
