/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx, html}",
	],
	theme: {
		extend: {
			colors: {
				"blanco": "#FFFFFF",
				"palido": "#F6EDFF",
				"lilaV": "#E0B6FF",
				"lilaP": "#D0BCFF",
				"negroP": "#1E1B1B",
				"gris": "#494649",
				"morado": "#8A20D5"
			},
			fontFamily: {
				'CondensedBold': ['OpenSans_Condensed-Bold', 'sans-serif'],
				'CondensedBoldItalic': ['OpenSans_Condensed-BoldItalic', 'sans-serif'],
				'CondensedExtraBold': ['OpenSans_Condensed-ExtraBold', 'sans-serif'],
				'CondensedExtraBoldItalic': ['OpenSans_Condensed-ExtraBoldItalic', 'sans-serif'],
				'CondensedItalic': ['OpenSans_Condensed-Italic', 'sans-serif'],
				'CondensedLight': ['OpenSans_Condensed-Light', 'sans-serif'],
				'CondensedLightItalic': ['OpenSans_Condensed-LightItalic', 'sans-serif'],
				'CondensedMedium': ['OpenSans_Condensed-Medium', 'sans-serif'],
				'CondensedMediumItalic': ['OpenSans_Condensed-MediumItalic', 'sans-serif'],
				'CondensedRegular': ['OpenSans_Condensed-Regular', 'sans-serif'],
				'CondensedSemiBold': ['OpenSans_Condensed-SemiBold', 'sans-serif'],
				'CondensedSemiBoldItalic': ['OpenSans_Condensed-SemiBoldItalic', 'sans-serif'],
				'SemiCondensedBold': ['OpenSans_SemiCondensed-Bold', 'sans-serif'],
				'SemiCondensedBoldItalic': ['OpenSans_SemiCondensed-BoldItalic', 'sans-serif'],
				'SemiCondensedExtraBold': ['OpenSans_SemiCondensed-ExtraBold', 'sans-serif'],
				'SemiCondensedExtraBoldItalic': ['OpenSans_SemiCondensed-ExtraBoldItalic', 'sans-serif'],
				'SemiCondensedItalic': ['OpenSans_SemiCondensed-Italic', 'sans-serif'],
				'SemiCondensedLight': ['OpenSans_SemiCondensed-Light', 'sans-serif'],
				'SemiCondensedLightItalic': ['OpenSans_SemiCondensed-LightItalic', 'sans-serif'],
				'SemiCondensedMedium': ['OpenSans_SemiCondensed-Medium', 'sans-serif'],
				'SemiCondensedMediumItalic': ['OpenSans_SemiCondensed-MediumItalic', 'sans-serif'],
				'SemiCondensedRegular': ['OpenSans_SemiCondensed-Regular', 'sans-serif'],
				'SemiCondensedSemiBold': ['OpenSans_SemiCondensed-SemiBold', 'sans-serif'],
				'SemiCondensedSemiBoldItalic': ['OpenSans_SemiCondensed-SemiBoldItalic', 'sans-serif'],
				'Bold': ['OpenSans-Bold', 'sans-serif'],
				'BoldItalic': ['OpenSans-BoldItalic', 'sans-serif'],
				'ExtraBold': ['OpenSans-ExtraBold', 'sans-serif'],
				'Italic': ['OpenSans-Italic', 'sans-serif'],
				'Light': ['OpenSans-Light', 'sans-serif'],
				'LightItalic': ['OpenSans-LightItalic', 'sans-serif'],
				'Medium': ['OpenSans-Medium', 'sans-serif'],
				'MediumItalic': ['OpenSans-MediumItalic', 'sans-serif'],
				'Regular': ['OpenSans-Regular', 'sans-serif'],
				'SemiBold': ['OpenSans-SemiBold', 'sans-serif'],
				'SemiBoldItalic': ['OpenSans-SemiBoldItalic', 'sans-serif'],
			}
		},
	},
	plugins: [],
}

