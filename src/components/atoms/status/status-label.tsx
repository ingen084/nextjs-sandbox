import { Tag, TagProps } from "@chakra-ui/react";

interface StatusLabelProps extends TagProps {
  status: "investigating" | "identified" | "monitoring" | "resolved" | "scheduled" | "in_progress" | "verifying" | "completed"
}

export default function StatusLabel({ status, ...props }: StatusLabelProps) {
  switch (status) {
    case 'investigating':
      return <Tag colorScheme={'red'} w={100} justifyContent='center' {...props}>調査中</Tag>;
    case 'identified':
      return <Tag colorScheme={'red'} w={100} justifyContent='center' {...props}>発生中</Tag>;
    case 'monitoring':
      return <Tag colorScheme={'green'} w={100} justifyContent='center' {...props}>解消の確認中</Tag>;
    case 'resolved':
      return <Tag colorScheme={'green'} w={100} justifyContent='center' {...props}>解消済み</Tag>;
    case 'scheduled':
      return <Tag colorScheme={'blue'} w={100} justifyContent='center' {...props}>予定</Tag>;
    case 'in_progress':
      return <Tag colorScheme={'yellow'} w={100} justifyContent='center' {...props}>作業中</Tag>;
    case 'completed':
      return <Tag colorScheme={'green'} w={100} justifyContent='center' {...props}>終了</Tag>;
  }
  return <></>;
}
