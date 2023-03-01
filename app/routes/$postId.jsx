import { Box } from '@chakra-ui/react';
import { useLoaderData, useParams } from '@remix-run/react';
import { Header } from '~/components/post';

export { loader } from '~/routes/api/post';

export default function Post() {
  const loader = useLoaderData();
  const { post } = loader.data;

  return (
    <Box
      maxWidth="800px"
      marginX="auto"
      px={{ base: '28px', md: '0' }}
    >
      <Header post={post} />
      <Box
        fontSize={{ base: '0.9375rem', md: 'lg' }}
        lineHeight="tall"
        color="rgba(12, 17, 43, 0.8)"
        mt="10px"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Box>
  );
}

export function ErrorBoundary() {
  const { postId } = useParams();
  return (
    <Box maxWidth="800px" marginX="auto">
      <p>
        Nem sikerült betölteni a cikket ezzel az ID-val:{' '}
        <i>{postId}</i>.
      </p>
      Sajnáljuk.
    </Box>
  );
}
