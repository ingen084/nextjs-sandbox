import { Box, Button, Heading, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export default function PaymentInformation() {
    return (
        <Box
          p={3}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'md'}
          rounded={'md'}>
          <Heading size='md'>課金情報</Heading>

          <Box position='relative'>
            <Text>プリペイド残高</Text>
            <Button size='xs' position='absolute' right='0' top='1'>チャージ</Button>
            <HStack justifyContent={'end'} align={'baseline'}>
              <Text fontSize={32} >{new Intl.NumberFormat('ja-JP').format(334)}</Text>
              <Text>円</Text>
            </HStack>
          </Box>

          <Text>今月の課金状況(今日まで)</Text>
          <HStack justifyContent={'end'} align={'baseline'}>
            <Text fontSize={32} >{new Intl.NumberFormat('ja-JP').format(123456)}</Text>
            <Text>円</Text>
          </HStack>

          <VStack>
            <Button w='full' size='sm'>請求書を確認</Button>
          </VStack>
        </Box>
    );
}