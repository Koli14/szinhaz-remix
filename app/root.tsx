import { ChakraProvider, Box, extendTheme, Heading } from '@chakra-ui/react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'

import { GateBanner } from '~/components/GateBanner'
import { Header } from '~/components/header'
import { colors, fonts } from './utils/root-utils'

export { loader } from '~/routes/api.root'
export { links, meta } from './utils/root-utils'

// Put the html skeleton in a component to make it easier to wrap ever
function Document({
  children,
  title = 'Szinház.online',
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang='hu'>
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// A standard layout that will be the same for each route
export function Layout({
  data,
  children,
}: {
  data: any
  children: React.ReactNode
}) {
  const hasGateBanner = data.bannerek?.bannerek?.gatebanner?.kep
  return (
    <>
      {hasGateBanner && <GateBanner banners={data.bannerek.bannerek} />}
      <Header
        tagClouds={data.tagCloud.tagCloud.tagCloud}
        menuItems={data.menuItems.nodes}
        hasGateBanner={!!data.bannerek?.bannerek?.gatebanner?.kep}
      />
      <Box
        as='main'
        position='relative'
        top={hasGateBanner ? { base: '0', md: '250px' } : '0'}
        mb={hasGateBanner ? { base: '0', md: '250px' } : '0'}
        minH='calc(100vh - 320px)'
        maxWidth='1210px'
        mx={{ base: '0', lg: 'auto' }}
        px={{ lg: '0.5rem' }}
        bg='white'
      >
        {children}
      </Box>
    </>
  )
}

export default function App() {
  // throw new Error("💣💥 Booooom");
  const loader = useLoaderData()
  const { data } = loader

  const customTheme = extendTheme({ fonts, colors })

  return (
    <Document>
      <ChakraProvider theme={customTheme}>
        <Layout data={data}>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  )
}

// How ChakraProvider should be used on CatchBoundary
export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as='h1' bg='purple.600'>
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error)
  return (
    <Document title='Error!'>
      <ChakraProvider>
        <Box>
          <Heading as='h1' bg='blue.500'>
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}
