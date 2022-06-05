import { Tag, TagLabel, TagLeftIcon, TagProps } from "@chakra-ui/react";
import { FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiTool } from "react-icons/fi";

interface StatusLabelProps extends TagProps {
  impact: "none" | "maintenance" | "minor" | "major" | "critical"
}

export default function ImpactLabel({ impact, ...props }: StatusLabelProps) {
  switch (impact) {
    // case 'maintenance':
    //   return (
    //     <Tag w={100} justifyContent='center' {...props}>
    //       <TagLeftIcon as={FiTool} />
    //       <TagLabel>メンテ</TagLabel>
    //     </Tag>
    //   );
    case 'minor':
      return (
        <Tag w={100} justifyContent='center' colorScheme={'yellow'} {...props}>
          <TagLeftIcon as={FiAlertTriangle} />
          <TagLabel>影響小</TagLabel>
        </Tag>
      );
    case 'major':
      return (
        <Tag w={100} justifyContent='center' colorScheme={'red'} {...props}>
          <TagLeftIcon as={FiAlertCircle} />
          <TagLabel>影響大</TagLabel>
        </Tag>
      );
    case 'critical':
      return (
        <Tag w={100} justifyContent='center' colorScheme={'purple'} {...props}>
          <TagLeftIcon as={FiAlertOctagon} />
          <TagLabel fontWeight={'bold'}>重大　</TagLabel>
        </Tag>
      );
  }
  return <></>;
}
