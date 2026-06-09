import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { crossChainDescription } from './resources/cross-chain';

export class N0xCrossChain implements INodeType {
	description: INodeTypeDescription = {
		displayName: '0x Cross Chain',
		name: 'N8nDevN0xCrossChain',
		icon: { light: 'file:./0x-cross-chain.png', dark: 'file:./0x-cross-chain.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Cross-chain API bridging assets across EVM, Solana, Tron, HyperCore with real-time quotes and status tracking.',
		defaults: { name: '0x Cross Chain' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevN0xCrossChainApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Cross Chain",
					"value": "Cross Chain",
					"description": "Cross-Chain API endpoints"
				}
			],
			"default": ""
		},
		...crossChainDescription
		],
	};
}
