import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class N0xCrossChainApi implements ICredentialType {
        name = 'N8nDevN0xCrossChainApi';

        displayName = '0x Cross Chain API';

        icon: Icon = { light: 'file:../nodes/N0xCrossChain/0x-cross-chain.png', dark: 'file:../nodes/N0xCrossChain/0x-cross-chain.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.0x.org',
                        required: true,
                        placeholder: 'https://api.0x.org',
                        description: 'The base URL of your 0x Cross Chain API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                '0x-api-key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
