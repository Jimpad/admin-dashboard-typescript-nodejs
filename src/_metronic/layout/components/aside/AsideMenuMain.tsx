/* eslint-disable react/jsx-no-target-blank */
// import React from 'react'
// import {useIntl} from 'react-intl'
// import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {

  return (
    <>
      <AsideMenuItem
        to='/home'
        icon='/media/icons/duotune/art/art002.svg'
        title='Home'
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>About</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/about/introduction'
        title='Introduction'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/about/introduction/story' title='Story' hasBullet={true}>
          <AsideMenuItem to='/about/introduction/story/origin' title='Origin' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/about/introduction/education' title='Education' hasBullet={true}>
          <AsideMenuItem to='/about/introduction/education/beginnings' title='Beginnings' hasBullet={true} />
          <AsideMenuItem to='/about/introduction/education/high-school' title='High School' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/about/introduction/work-history' title='Work History' hasBullet={true}>
          <AsideMenuItem to='/about/introduction/education/walter' title='Walter' hasBullet={true} />
          <AsideMenuItem to='/about/introduction/education/one-identity' title='One Identity' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      
      <AsideMenuItemWithSub
        to='/about/skills'
        title='Skills'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItemWithSub to='/about/skills/web-applications' title='Web Applications' hasBullet={true}>
          <AsideMenuItem to='/about/skills/web-applications/general' title='General' hasBullet={true} />
          <AsideMenuItem to='/about/skills/web-applications/implementation' title='Implementation' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/about/skills/cybersecurity' title='Cybersecurity' hasBullet={true}>
          <AsideMenuItem to='/about/skills/web-applications/penetration-testing' title='Penetration Testing' hasBullet={true} />
          <AsideMenuItem to='/about/skills/web-applications/algorithms' title='Algorithms' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>


      {/* PROJECTS */}
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Projects</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/projects/blynk-server'
        title='Blynk Server'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/projects/blynk-server/set-up' title='Set up' hasBullet={true}>
          <AsideMenuItem to='/projects/blynk-server/set-up/prerequisites' title='Prerequisites' hasBullet={true} />
          <AsideMenuItem to='/projects/blynk-server/set-up/install' title='Install' hasBullet={true} />
          <AsideMenuItem to='/projects/blynk-server/set-up/test' title='Test' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/about/introduction/use' title='Use' hasBullet={true}>
          <AsideMenuItem to='/projects/blynk-server/use/database-management' title='Database Management' hasBullet={true} />
          <AsideMenuItem to='/projects/blynk-server/use/dockerized-solution' title='Dockerized Solution' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/about/blynk-server/changelog' title='Changelog' hasBullet={true}>
          <AsideMenuItem to='/projects/blynk-server/changelog/documentation' title='Documentation' hasBullet={true} />
          <AsideMenuItem to='/projects/blynk-server/changelog/patch-notes' title='Patch Notes' hasBullet={true} />
        </AsideMenuItemWithSub>

      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/projects/boilerplate-rest-api-nodejs'
        title='Boilerplate Rest API NodeJS'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/projects/boilerplate-rest-api-nodejs/set-up' title='Set up' hasBullet={true}>
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/set-up/prerequisites' title='Prerequisites' hasBullet={true} />
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/set-up/install' title='Install' hasBullet={true} />
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/set-up/test' title='Test' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/projects/boilerplate-rest-api-nodejs/deploy' title='Deploy' hasBullet={true}>
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/use/database-management' title='Database Management' hasBullet={true} />
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/use/dockerized-solution' title='Dockerized Solution' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/projects/boilerplate-rest-api-nodejs/changelog' title='Changelog' hasBullet={true}>
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/changelog/documentation' title='Documentation' hasBullet={true} />
          <AsideMenuItem to='/projects/boilerplate-rest-api-nodejs/changelog/patch-notes' title='Patch Notes' hasBullet={true} />
        </AsideMenuItemWithSub>
        
      </AsideMenuItemWithSub>
      
      <AsideMenuItemWithSub
        to='/projects/ytdl-nodejs'
        title='YouTube Downloader NodeJS'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/projects/ytdl-nodejs/set-up' title='Set up' hasBullet={true}>
          <AsideMenuItem to='/projects/ytdl-nodejs/set-up/prerequisites' title='Prerequisites' hasBullet={true} />
          <AsideMenuItem to='/projects/ytdl-nodejs/set-up/install' title='Install' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/about/introduction/use' title='Use' hasBullet={true}>
          <AsideMenuItem to='/projects/ytdl-nodejs/use/database-management' title='Variety of Formats' hasBullet={true} />
          <AsideMenuItem to='/projects/ytdl-nodejs/use/dockerized-solution' title='Original Quality' hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/about/blynk-server/changelog' title='Changelog' hasBullet={true}>
          <AsideMenuItem to='/projects/ytdl-nodejs/changelog/documentation' title='Documentation' hasBullet={true} />
          <AsideMenuItem to='/projects/ytdl-nodejs/changelog/patch-notes' title='Patch Notes' hasBullet={true} />
        </AsideMenuItemWithSub>

      </AsideMenuItemWithSub>

      {/* CONTACT */}
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Contact</span>
        </div>
      </div>

      <AsideMenuItem
        to='/contact/connect'
        icon='/media/icons/duotune/art/art002.svg'
        title='Connect'
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/contact/hire'
        icon='/media/icons/duotune/art/art002.svg'
        title='Hire'
        fontIcon='bi-app-indicator'
      />
    </>
  )
}
