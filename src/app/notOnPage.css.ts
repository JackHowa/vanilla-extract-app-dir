import { style } from '@vanilla-extract/css'

// not being imported on page.tsx
export const testNotHereOnPage = style({
	color: 'green',
})
