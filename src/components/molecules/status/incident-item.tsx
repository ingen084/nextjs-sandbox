import { Box, Text, Heading, HStack, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { format } from 'date-fns';
import ImpactLabel from "@/components/atoms/status/impact-label";
import StatusLabel from "@/components/atoms/status/status-label";
import { Incident } from "@/models/statuspage";

interface IncidentItemProps {
  incident: Incident,
}

export default function IncidentItem({ incident }: IncidentItemProps) {
  return (
    <LinkBox>
      <HStack alignItems={'start'}>
        <Flex direction={'column'}>
          <ImpactLabel impact={incident.impact} />
          <StatusLabel status={incident.status} />
        </Flex>
        <Box>
          <Heading size='sm'><LinkOverlay href={incident.shortlink} target='_blank'>{incident.name}</LinkOverlay></Heading>
          <Text fontSize={{ base: 'xs', md: 'md' }}>{incident.started_at && format(new Date(incident.started_at), 'yyyy/MM/dd HH:mm')} ~ {incident.resolved_at && format(new Date(incident.resolved_at), 'yyyy/MM/dd HH:mm')}</Text>
        </Box>
      </HStack>
    </LinkBox>
  );
}
