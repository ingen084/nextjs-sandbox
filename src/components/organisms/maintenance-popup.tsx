import { Box, useColorModeValue, Heading, VStack, Icon } from "@chakra-ui/react";
import { FiAlertTriangle } from "react-icons/fi";
import useSWR from 'swr';
import IncidentItem from "@/components/molecules/status/incident-item";
import { Maintenances } from "@/models/statuspage";
import { addDays, format, isAfter, parse } from "date-fns";

export default function MaintenancePopup() {
  const { data, error } = useSWR(
    'https://v7cw81zlfmsm.statuspage.io/api/v2/scheduled-maintenances.json',
    (url: string): Promise<Maintenances> => fetch(url).then((res) => {
      if (!res.ok)
        throw new Error();
      return res.json()
    })
  );

  if (error) {
    return <Box
      mb={5}
      p={3}
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('yellow.400', 'yellow.600')}
      borderWidth={1}
      borderTopWidth={10}
      boxShadow={'md'}
      rounded={'md'}
      overflow={'hidden'}>
      <Heading display={'flex'} alignItems='center' size='md'><Icon mr={2} as={FiAlertTriangle} /> メンテナンス情報の取得に失敗しました</Heading>
    </Box>
  }

  const filteredData = data?.scheduled_maintenances.filter(i =>
    i.impact != 'none' &&
    (
      // 終了済みのメンテ情報は1日後まで
      i.status != 'completed' || !i.resolved_at || isAfter(addDays(new Date(i.resolved_at), 1), new Date())
    )
  );

  if (!filteredData?.length)
    return <></>;

  return (
    <Box
      mb={5} p={3}
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('yellow.400', 'yellow.600')}
      borderWidth={1}
      borderTopWidth={10}
      boxShadow={'md'}
      rounded={'md'}
      overflow={'hidden'}>
      <Heading size='md' mb={3}>メンテナンス情報</Heading>
      <VStack alignItems={'stretch'}>
        {filteredData.map(i => <IncidentItem incident={i} key={i.id} />)}
      </VStack>
    </Box>
  );
}
