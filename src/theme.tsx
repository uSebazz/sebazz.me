import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
	fonts: {
		heading:
			'"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
		body: '"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
	},
	colors: {
		neutralG: {
			100: '#F8F9FA',
			200: '#E9ECEF',
			300: '#DEE2E6',
			400: '#CED4DA',
			500: '#ADB5BD',
			600: '#6C757D',
			700: '#495057',
			800: '#343A40',
			900: '#212529'
		},
		neutralD: {
			100: '#D8F3DC',
			200: '#B7E4C7',
			300: '#95D5B2',
			400: '#74C69D',
			500: '#52B788',
			600: '#40916C',
			700: '#2D6A4F',
			800: '#1B4332',
			900: '#081C15'
		}
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				scrollBehavior: 'smooth'
			},
			body: {
				color: mode('neutralG.800', 'neutralG.300')(props),
				bg: mode('neutralG.100', 'neutralG.900')(props),
				fontSize: '1.2em'
			}
		})
	},
	components: {
		MenuButton: {
			baseStyle: (props: StyleFunctionProps) => ({
				_hover: {
					backgroundColor: mode('neutralG.400', 'neutralD.400')(props)
				}
			})
		},
		Heading: {
			baseStyle: (props: StyleFunctionProps) => ({
				borderBottom: '2px',
				borderColor: mode('neutralG.500', 'neutralD.500')(props),
				pb: 2,
				fontWeight: '500'
			})
		},
		Link: {
			baseStyle: {
				fontWeight: 'inherit',
				_hover: {
					textDecoration: 'none'
				}
			}
		}
	}
});

export default customTheme;
