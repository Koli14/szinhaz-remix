import { Box, Flex, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'

import { socialLinks } from '~/utils'

export default function SocialNav() {
  return (
    <Flex alignItems='center'>
      <Flex position={{ sm: 'relative' }}>
        {socialLinks.map(([name, link]) => {
          const SocialIcon = icons[name]
          return (
            <SocialMenuItem
              key={name}
              label={name}
              link={link}
              icon={SocialIcon}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}
const icons = {
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
}

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Box
    color='black'
    transition='all 0.3s'
    _hover={{ color: 'accent.400' }}
    as='li'
    listStyleType='none'
    mx='2'
    {...props}
  >
    <Link to={link}>
      <Box as={icon} boxSize='25px' />
    </Link>
    <VisuallyHidden>{label}</VisuallyHidden>
  </Box>
)
