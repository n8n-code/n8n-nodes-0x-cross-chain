import type { INodeProperties } from 'n8n-workflow';

export const crossChainDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					]
				}
			},
			"options": [
				{
					"name": "Cross Chain Get Quotes",
					"value": "Cross Chain Get Quotes",
					"action": "getQuotes",
					"description": "Get the quotes for a cross chain swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cross-chain/quotes"
						}
					}
				},
				{
					"name": "Cross Chain Get Status",
					"value": "Cross Chain Get Status",
					"action": "getStatus",
					"description": "Get the status of a cross chain transaction",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cross-chain/status"
						}
					}
				},
				{
					"name": "Cross Chain List Sources",
					"value": "Cross Chain List Sources",
					"action": "listSources",
					"description": "List available swap and bridge sources for a cross chain swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cross-chain/sources"
						}
					}
				},
				{
					"name": "Cross Chain Get Tx History",
					"value": "Cross Chain Get Tx History",
					"action": "getTxHistory",
					"description": "Get cross-chain transaction history for a user wallet address. Note: this endpoint is in beta and still a work in progress — please reach out to the 0x team if you or your users run into any issues.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cross-chain/tx-history-beta"
						}
					}
				},
				{
					"name": "Cross Chain Stream Quotes",
					"value": "Cross Chain Stream Quotes",
					"action": "streamQuotes",
					"description": "Stream cross-chain quotes as they become available",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cross-chain/quotes/stream"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /cross-chain/quotes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Origin Chain",
			"name": "originChain",
			"required": true,
			"description": "The source chain from which the cross-chain swap will originate. Can be specified as chain ID or name. See [here](https://0x-docs.gitbook.io/0x-cross-chain-api-beta/developer-resources/supported-chains-and-providers) for the list of supported chains",
			"default": 8453,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Destination Chain",
			"name": "destinationChain",
			"required": true,
			"description": "The destination chain where tokens will be received after the cross-chain swap. Can be specified as chain ID or name. See [here](https://0x-docs.gitbook.io/0x-cross-chain-api-beta/developer-resources/supported-chains-and-providers) for the list of supported chains",
			"default": 42161,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell on the origin chain. Format varies by chain type (EVM address for EVM/HyperCore chains, token mint address for Solana, base58check address for Tron)",
			"default": "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Buy Token",
			"name": "buyToken",
			"required": true,
			"description": "The contract address of the token to buy on the destination chain. Format varies by chain type (EVM address for EVM/HyperCore chains, token mint address for Solana, base58check address for Tron)",
			"default": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"required": true,
			"description": "The amount of `sellToken` (in `sellToken`'s base units) to sell on the origin chain",
			"default": "2570",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Origin Address",
			"name": "originAddress",
			"required": true,
			"description": "The wallet address on the origin chain that holds the sellToken balance and will initiate the cross-chain transaction",
			"default": "0x56EB0aD2dC746540Fab5C02478B31e2AA9DdC38C",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Destination Address",
			"name": "destinationAddress",
			"description": "The wallet address on the destination chain that will receive the buyToken. If not specified, defaults to originAddress on the destination chain",
			"default": "0x56EB0aD2dC746540Fab5C02478B31e2AA9DdC38C",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Gas Payer",
			"name": "gasPayer",
			"description": "The Solana address that will pay for transaction fees when the origin chain is Solana. Only applicable for Solana origin chains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPayer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage for each swap or bridge step of the cross-chain swap in basis points (100 = 1%)",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippageBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Excluded Bridges",
			"name": "excludedBridges",
			"description": "Comma-separated list of bridge providers to exclude from routing",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Included Bridges",
			"name": "includedBridges",
			"description": "Comma-separated list of bridge providers to include in routing. Mutually exclusive with excludedBridges",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "includedBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Excluded Swap Sources",
			"name": "excludedSwapSources",
			"description": "Comma-separated list of DEX sources to exclude from routing on both chains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedSwapSources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Bps",
			"name": "feeBps",
			"description": "The trading fee amounts in basis points to charge on the origin chain (supports single or comma-separated values). Must be used together with feeRecipient. When multiple values are provided, must match the length of feeRecipient. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Recipient",
			"name": "feeRecipient",
			"description": "The wallet addresses to receive trading fees on the origin chain (supports single or comma-separated values). Must be used together with feeBps. When multiple values are provided, must match the length of feeBps. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Token",
			"name": "feeToken",
			"description": "The token addresses for fee collection on the origin chain (supports single or comma-separated values). Must be the same as sellToken. When multiple values are provided, must match the length of feeBps. If omitted, defaults to sellToken. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Sort Quotes By",
			"name": "sortQuotesBy",
			"required": true,
			"description": "How to sort the returned quotes - either by speed (fastest execution time) or price (best exchange rate)",
			"default": "speed",
			"type": "options",
			"options": [
				{
					"name": "Speed",
					"value": "speed"
				},
				{
					"name": "Price",
					"value": "price"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sortQuotesBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "Max Num Quotes",
			"name": "maxNumQuotes",
			"description": "The maximum number of cross-chain quotes to return, between 1 and 10. Each quote represents a different combination of bridges and DEXs",
			"default": 3,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxNumQuotes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Quotes"
					]
				}
			}
		},
		{
			"displayName": "GET /cross-chain/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Status"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Status"
					]
				}
			}
		},
		{
			"displayName": "Origin Chain",
			"name": "originChain",
			"required": true,
			"description": "The origin chain where the cross-chain transaction was initiated",
			"default": 8453,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Status"
					]
				}
			}
		},
		{
			"displayName": "Origin Tx Hash",
			"name": "originTxHash",
			"required": true,
			"description": "The transaction hash on the origin chain to track. Format varies by chain type (32-byte hex for EVM/HyperCore, base58 signature for Solana, 64-char hex for Tron)",
			"default": "0xe347e66b1d9793a11a962c1483f9eef03272c362c41dc1f21c87577ef5ec1a7c",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originTxHash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Status"
					]
				}
			}
		},
		{
			"displayName": "Quote Id",
			"name": "quoteId",
			"description": "The quote ID associated with the cross-chain transaction",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "quoteId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Status"
					]
				}
			}
		},
		{
			"displayName": "GET /cross-chain/sources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain List Sources"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain List Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /cross-chain/tx-history-beta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Tx History"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Tx History"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"required": true,
			"description": "The wallet address of the user to get transaction history for. Accepts EVM (0x...), Solana, and Tron addresses",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Tx History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Maximum number of transactions to return",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Tx History"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Get Tx History"
					]
				}
			}
		},
		{
			"displayName": "GET /cross-chain/quotes/stream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Origin Chain",
			"name": "originChain",
			"required": true,
			"description": "The source chain from which the cross-chain swap will originate. Can be specified as chain ID or name. See [here](https://0x-docs.gitbook.io/0x-cross-chain-api-beta/developer-resources/supported-chains-and-providers) for the list of supported chains",
			"default": 8453,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Destination Chain",
			"name": "destinationChain",
			"required": true,
			"description": "The destination chain where tokens will be received after the cross-chain swap. Can be specified as chain ID or name. See [here](https://0x-docs.gitbook.io/0x-cross-chain-api-beta/developer-resources/supported-chains-and-providers) for the list of supported chains",
			"default": 42161,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell on the origin chain. Format varies by chain type (EVM address for EVM/HyperCore chains, token mint address for Solana, base58check address for Tron)",
			"default": "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Buy Token",
			"name": "buyToken",
			"required": true,
			"description": "The contract address of the token to buy on the destination chain. Format varies by chain type (EVM address for EVM/HyperCore chains, token mint address for Solana, base58check address for Tron)",
			"default": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"required": true,
			"description": "The amount of `sellToken` (in `sellToken`'s base units) to sell on the origin chain",
			"default": "2570",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Origin Address",
			"name": "originAddress",
			"required": true,
			"description": "The wallet address on the origin chain that holds the sellToken balance and will initiate the cross-chain transaction",
			"default": "0x56EB0aD2dC746540Fab5C02478B31e2AA9DdC38C",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "originAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Destination Address",
			"name": "destinationAddress",
			"description": "The wallet address on the destination chain that will receive the buyToken. If not specified, defaults to originAddress on the destination chain",
			"default": "0x56EB0aD2dC746540Fab5C02478B31e2AA9DdC38C",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Gas Payer",
			"name": "gasPayer",
			"description": "The Solana address that will pay for transaction fees when the origin chain is Solana. Only applicable for Solana origin chains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPayer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage for each swap or bridge step of the cross-chain swap in basis points (100 = 1%)",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippageBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Excluded Bridges",
			"name": "excludedBridges",
			"description": "Comma-separated list of bridge providers to exclude from routing",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Included Bridges",
			"name": "includedBridges",
			"description": "Comma-separated list of bridge providers to include in routing. Mutually exclusive with excludedBridges",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "includedBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Excluded Swap Sources",
			"name": "excludedSwapSources",
			"description": "Comma-separated list of DEX sources to exclude from routing on both chains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedSwapSources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Bps",
			"name": "feeBps",
			"description": "The trading fee amounts in basis points to charge on the origin chain (supports single or comma-separated values). Must be used together with feeRecipient. When multiple values are provided, must match the length of feeRecipient. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Recipient",
			"name": "feeRecipient",
			"description": "The wallet addresses to receive trading fees on the origin chain (supports single or comma-separated values). Must be used together with feeBps. When multiple values are provided, must match the length of feeBps. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Fee Token",
			"name": "feeToken",
			"description": "The token addresses for fee collection on the origin chain (supports single or comma-separated values). Must be the same as sellToken. When multiple values are provided, must match the length of feeBps. If omitted, defaults to sellToken. Note: integrator fee collection is not yet supported for Tron-originated routes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "feeToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
		{
			"displayName": "Max Num Quotes",
			"name": "maxNumQuotes",
			"description": "The maximum number of cross-chain quotes to return, between 1 and 10. Each quote represents a different combination of bridges and DEXs",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxNumQuotes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cross Chain"
					],
					"operation": [
						"Cross Chain Stream Quotes"
					]
				}
			}
		},
];
