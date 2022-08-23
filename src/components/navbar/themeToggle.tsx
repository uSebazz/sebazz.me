import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Icon, IconButton, Tooltip, useColorMode } from '@chakra-ui/react';

const ThemeToggle = ({ mobile }: ThemeToggleProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Tooltip label={colorMode === 'dark' ? 'Light mode' : 'Dark mode'} aria-label="A tooltip">
			{mobile ? (
				<Button size="sm" leftIcon={colorMode === 'dark' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />} onClick={toggleColorMode}>
					{colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
				</Button>
			) : (
				<IconButton
					isRound
					aria-label="Switch theme"
					variant={mobile ? 'ghost' : undefined}
					icon={colorMode === 'dark' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
					onClick={toggleColorMode}
				/>
			)}
		</Tooltip>
	);
};

type ThemeToggleProps = {
	mobile?: boolean;
};

export default ThemeToggle;
