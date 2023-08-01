import { ColorModeScript } from '@chakra-ui/react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/rex.png" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<style data-href="https://fonts.googleapis.com/css2?family=Inter&display=optional">
						{`
                          @font-face {
                            font-family: 'Inter var';
                            font-style: normal;
                          }
                       `}
					</style>
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
