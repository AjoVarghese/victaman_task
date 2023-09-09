import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem
} from '@mantine/core'

import AppLogo from '../assets/images/DMH-Logo6.png'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Content from './Content'

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    })
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0]
    }),

    '&:active': theme.activeStyles
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },
  homeLink: {
    cursor: 'pointer'
  }
}))

export function Navbar ({ scrollToContactForm }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [showContact, setShowContact] = useState(false)
  const { classes, theme } = useStyles()

  const handleLinkClick = link => {
    if (drawerOpened) {
      closeDrawer()
    }

    if (link === 'Contact') {
      scrollToContactForm()
    } else {
      setShowContact(false)
    }
  }

  return (
    <Box pb={120}>
      <Header height={60} px='md'>
        <Group position='apart' sx={{ height: '100%' }}>
          <img
            src={AppLogo}
            alt='DMH Logo'
            style={{ width: '300px', height: '65px' }}
          />

          <Group className={classes.hiddenMobile}>
            <p
              href='#'
              className={`${classes.link} ${classes.homeLink}`}
              style={{ color: 'red' }}
              onClick={() => setShowContact(false)}
            >
              Home
            </p>
            <p
              href=''
              className={`${classes.link} ${classes.homeLink}`}
              style={{ color: 'red' }}
              onClick={scrollToContactForm}
            >
              Contact
            </p>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={AppLogo}
            alt='Your Logo'
            style={{ width: '50%', height: '100px' }}
          />
        </div>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <p
            href='#'
            className={`${classes.link} ${classes.homeLink}`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </p>
          <p
            className={`${classes.link} ${classes.homeLink}`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </p>

          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
        </ScrollArea>
      </Drawer>
      {showContact ? (
        <div>
          <ContactForm />
        </div>
      ) : (
        <div>
          <Content />
        </div>
      )}
    </Box>
  )
}
