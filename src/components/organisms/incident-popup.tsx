import { Box, useColorModeValue, Heading, VStack, Icon } from "@chakra-ui/react";
import { FiAlertTriangle } from "react-icons/fi";
import useSWR from 'swr';
import IncidentItem from "@/components/molecules/status/incident-item";
import { Incidents } from "@/models/statuspage";
import { addDays, isAfter } from "date-fns";

export default function IncidentPopup() {
  const { data, error } = useSWR(
    'https://v7cw81zlfmsm.statuspage.io/api/v2/incidents.json',
    (url: string): Promise<Incidents> => fetch(url).then((res) => {
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
      borderColor={useColorModeValue('red.400', 'red.600')}
      borderWidth={1}
      borderTopWidth={10}
      boxShadow={'md'}
      rounded={'md'}
      overflow={'hidden'}>
      <Heading display={'flex'} alignItems='center' size='md'><Icon mr={2} as={FiAlertTriangle} /> 障害情報の取得に失敗しました</Heading>
    </Box>
  }

  const filteredData = data?.incidents.filter(i =>
    i.impact != 'none' &&
    (
      // 終了済みの障害情報は1日後まで
      i.status != 'resolved' || !i.resolved_at || isAfter(addDays(new Date(i.resolved_at), 1), new Date())
    )
  );

  if (!filteredData?.length)
    return <></>;

  return (
    <Box
      mb={5} p={3}
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('red.400', 'red.600')}
      borderWidth={1}
      borderTopWidth={10}
      boxShadow={'md'}
      rounded={'md'}
      overflow={'hidden'}>
      <Heading size='md' mb={3}>障害情報</Heading>
      <VStack alignItems={'stretch'}>
        {filteredData &&
          filteredData.map(i => <IncidentItem incident={i} key={i.id} />)
        }
      </VStack>
    </Box>
  );
}
