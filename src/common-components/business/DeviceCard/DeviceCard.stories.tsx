import React from 'react';
import { BaseStorybookDecorator } from '@base/features/base-decorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeviceCard, { Props as DeviceCardProps } from './index';

export default {
	title: 'Design System/Business Components/Device Card',
	component: DeviceCard,
	argTypes: {

	},
	decorators: [BaseStorybookDecorator],
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as ComponentMeta<typeof DeviceCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof DeviceCard> = (args) => <DeviceCard {...args} />;

export const Buy = Template.bind({});
Buy.args = {
	device: {
		id: 1,
		brand: 'Samsung',
		image: 'http://localhost:8082/015a419598346bdd1c95.jpg',
		description: 'Single SIM 5G ultra wideband (mmWave) variant of Galaxy Note 20 Ultra flagship',
		name: 'Samsung Canvas C2 5G',
		price: 400
	},
	quantity: 0,
	priceTitle: 'Price',
	buttonTitle: 'Add to Cart'
} as DeviceCardProps;

export const Remove = Template.bind({});
Remove.args = {
	...Buy.args,
	quantity: 1,
	removeButtonTitle: 'Remove'
} as DeviceCardProps;
