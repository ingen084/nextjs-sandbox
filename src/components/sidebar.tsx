import React, { ReactNode } from 'react';
import Gravatar from 'react-gravatar';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Link,
  Spacer
} from '@chakra-ui/react';
import NextLink from 'next/link'
import {
  FiHome,
  FiCreditCard,
  FiTrendingUp,
  FiInfo,
  FiKey,
  FiMenu,
  FiExternalLink,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'ダッシュボード', icon: FiHome, href: '/' },
  { name: '契約状況', icon: FiCreditCard, href: '/' },
  { name: '利用状況', icon: FiTrendingUp, href: '/' },
  { name: 'お知らせ', icon: FiInfo, href: '/' },
  { name: 'APIキー･OAuth', icon: FiKey, href: '/' },
  { name: '簡易アプリ群', icon: FiExternalLink, href: 'https://manager.dmdata.jp/apps/' },
  { name: 'ドキュメント', icon: FiExternalLink, href: 'https://dmdata.jp/doc/' },
];

export default function Sidebar({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'flex' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Flex
      direction='column'
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      h="full"
      pos="fixed"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href="https://dmdata.jp" isExternal>
          <Image src='https://manager.dmdata.jp/control/assets/logo.png' />
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box onClick={onClose} overflowY='auto'>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      <Spacer />
      <Box
        mx="4" mb="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.200',
        }}>
        <Menu isLazy>
          <MenuButton
            py={2}
            m="2"
            p="0"
            w="calc(100% - 1em)"
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}>
            <Flex align='center'>
              <Gravatar email='ingen188@gmail.com' css={{ height: 'var(--chakra-sizes-8);', width: 'auto', borderRadius: '50%' }} />
              <VStack flex='1' display='flex' alignItems="flex-start" spacing="1px" ml="2" overflowX='hidden'>
                <Text fontSize="sm" w='full' textOverflow="ellipsis" wordBreak='break-all' whiteSpace='nowrap' overflowX='hidden' textAlign='left'>ingen188@gmail.comandsuperlongemailaddress</Text>
                <Text fontSize="xs" color="gray.600">User</Text>
              </VStack>
              <Box ml="2">
                <FiChevronDown />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList
            position='relative' zIndex={1}
            onClick={onClose}
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Text mx='4' color={useColorModeValue('gray.400', 'gray.600')}>ingen188@gmail.com12345678901234567890</Text>
            <MenuDivider />
            <MenuItem>アカウント設定</MenuItem>
            <Link href='https://dmdata.jp/contact.html' target='_blank' style={{ textDecoration: 'none' }}>
              <MenuItem>お問い合わせ</MenuItem>
            </Link>
            <NextLink href='/license' passHref>
              <MenuItem>ライセンス情報</MenuItem>
            </NextLink>
            <MenuDivider />
            <MenuItem>ログアウト</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
  href: string;
}
const NavItem = ({ icon, children, href, ...props }: NavItemProps) => {
  if (href.startsWith('http'))
    return (<Link href={href} target='_blank' style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        mx='4'
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.800',
          color: 'white',
        }}
        {...props}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>);
  return (<NextLink href={href} target='_blank' style={{ textDecoration: 'none' }} passHref>
        <Flex
      align="center"
      mx='4'
      p="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'blue.800',
        color: 'white',
      }}
      {...props}>
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  </NextLink>);
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      position='sticky' zIndex={1} top={0}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      h="50"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box flex='1' h='full'>
        <Image display={{ base: 'flex', md: 'none' }} h='100%' mx='auto' src='https://manager.dmdata.jp/control/assets/logo.png' />
      </Box>
    </Flex>
  );
};
