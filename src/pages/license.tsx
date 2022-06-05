import { Box, Code, Container, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import licenses from '@/assets/licenses.json';
import Head from 'next/head';
import React from 'react';

const License: NextPage = () => {
  return (
    <Container maxW='5xl' p={0}>
      <Head>
        <title>ライセンス情報 | DM-D.S.S. コントロールパネル</title>
      </Head>
      <Heading>ライセンス情報</Heading>
      {Object.keys(licenses).map(v => (
        <Box key={v}>
          <Link href={licenses[v].repository} target='_blank'_focus={{ boxShadow: 'none' }}><Heading size='md'>{v}</Heading></Link>
          <Code>{licenses[v].licenses}{'\n'}{licenses[v].copyright}</Code>
        </Box>
      ))}
    </Container>
  );
}
export default License
