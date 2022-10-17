// import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
// import {useIntl} from 'react-intl'

export function MenuInner() {
  return (
    <>
      <MenuItem title='Home' to='/home' />

      <MenuInnerWithSub title='About' to='/about' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Introduction'
          to='/about/introduction'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/about/introduction/story' title='Story' hasBullet={true} />
          <MenuItem to='/about/introduction/education' title='Education' hasBullet={true} />
          <MenuItem to='/about/introduction/work-history' title='Work History' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='Skills'
          to='/about/skills'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/about/skills/web-applications' title='Web Applications' hasBullet={true} />
          <MenuItem to='/about/skills/cybersecurity' title='Cybersecurity' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Projects' to='/projects' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Blynk Server'
          to='/projects/bylnk-server'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/projects/bylnk-server/set-up' title='Set Up' hasBullet={true} />
          <MenuItem to='/projects/bylnk-server/deploy' title='Deploy' hasBullet={true} />
          <MenuItem to='/projects/bylnk-server/changelog' title='Changelog' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='Boilerplate Rest API NodeJS'
          to='/projects/boilerplate-rest-api-nodejs'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/projects/boilerplate-rest-api-nodejs/set-up' title='Set Up' hasBullet={true} />
          <MenuItem to='/projects/boilerplate-rest-api-nodejs/deploy' title='Deploy' hasBullet={true} />
          <MenuItem to='/projects/boilerplate-rest-api-nodejs/changelog' title='Changelog' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='YouTube Downloader NodeJS'
          to='/projects/youtube-downloader-nodejs'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/projects/bylnk-server/set-up' title='Set Up' hasBullet={true} />
          <MenuItem to='/projects/bylnk-server/deploy' title='Deploy' hasBullet={true} />
          <MenuItem to='/projects/bylnk-server/changelog' title='Changelog' hasBullet={true} />
        </MenuInnerWithSub>

      
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Connect'
        to='/connect'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub>
    </>
  )
}
