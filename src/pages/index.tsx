import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Container, Flex, Grid, GridItem, Heading, HStack, Table, TableContainer, Tbody, Tr, Td, Th, Thead, VStack, Tfoot, useColorModeValue, Stack, Button, Box, Text, Link
} from '@chakra-ui/react';
import IncidentPopup from '@/components/organisms/incident-popup';
import MaintenancePopup from '@/components/organisms/maintenance-popup';
import PaymentInformation from '@/components/organisms/payment-information';

const Home: NextPage = () => {
  return (
    <Container maxW='5xl' p={0}>
      <Head>
        <title>ダッシュボード | DM-D.S.S. コントロールパネル</title>
      </Head>

      <Heading mb={3}>ダッシュボード</Heading>

      <IncidentPopup />
      <MaintenancePopup />

      <Flex direction={{ base: 'column', xl: 'row' }} alignItems={{ base: 'stretch', xl: 'start' }} gap={5}>
        <PaymentInformation />

        <TableContainer
          position='relative' zIndex={0}
          m={0}
          p={3}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'md'}
          rounded={'md'}
          flex='1'>
          <Heading size='md'>契約中のプラン</Heading>
          <Box overflowX={'auto'}>
            <Table size='sm' mt={2} css={{ tableLayout: 'fixed' }}>
              <Thead>
                <Tr>
                  <Th w={5} isNumeric>#</Th>
                  <Th w={200} overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>区分</Th>
                  <Th w={100} isNumeric>価格(月最大)</Th>
                  <Th w={100} isNumeric>価格(日)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td isNumeric>1</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>地震・津波関連</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>550円</Td>
                  <Td isNumeric>25円</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>2</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>火山関連</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>550円</Td>
                  <Td isNumeric>25円</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>3</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>気象警報・注意報関連</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>550円</Td>
                  <Td isNumeric>25円</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>4</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>定時報・その他関連</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>550円</Td>
                  <Td isNumeric>25円</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>5</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>telegram.bufr</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>0円</Td>
                  <Td isNumeric>-</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>6</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>WebSocket同時接続数+2</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>110円</Td>
                  <Td isNumeric>-</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>7</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>WebSocket同時接続数+5</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>220円</Td>
                  <Td isNumeric>-</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>8</Td>
                  <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>WebSocket同時接続数+10</Td>
                  <Td isNumeric overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>418円</Td>
                  <Td isNumeric>-</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Button size='sm' position='absolute' right={3} top={3}>プラン詳細の確認･変更</Button>
        </TableContainer>
      </Flex>

      <TableContainer
        my={5}
        w='full'
        p={3}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}>
        <HStack>
          <Heading size='md'>お知らせ</Heading>
          <Text>(最新5件)</Text>
        </HStack>
        <Table size='sm' mt={2} css={{ tableLayout: 'fixed' }}>
          <Tbody>
            <Tr>
              <Td w={120}>2022/05/25 16:11</Td>
              <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>土砂災害警戒情報の伝達演習計画について</Td>
            </Tr>
            <Tr>
              <Td>2022/05/19 17:08</Td>
              <Td overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>気象庁防災情報XMLフォーマットに関連する気象庁HPの更新</Td>
            </Tr>
          </Tbody>
        </Table>
        <Link size='sm' m={5}>過去のお知らせを確認</Link>
      </TableContainer>
    </Container>
  )
}

export default Home
