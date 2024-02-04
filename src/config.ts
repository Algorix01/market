import { NeverminedOptions } from '@nevermined-io/sdk'
import { ethers } from 'ethers'

export const neverminedNodeAddress = process.env.REACT_APP_NEVERMINED_NODE_ADDRESS || '0x046d0698926aFa3ab6D6591f03063488F3Fb4327'
export const neverminedNodeUri = process.env.REACT_NEVERMINED_NODE_URI || 'https://node.testing.nevermined.app'
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '421614' // for Arbitrum Sepolia
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445'
export const marketplaceUri = process.env.REACT_APP_MARKETPLACE_API || 'https://marketplace-api.testing.nevermined.app'
const graphHttpUri = process.env.REACT_APP_GRAPH_HTTP_URI || 'https://api.thegraph.com/subgraphs/name/nevermined-io/public'
export const erc20TokenAddress = process.env.REACT_APP_ERC20_TOKEN_ADDRESS || '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d'
export const web3ProviderUri = process.env.REACT_APP_WEB3_PROVIDER_URI || 'https://sepolia-rollup.arbitrum.io/rpc'
export const appConfig: NeverminedOptions = {
  web3Provider: typeof window !== 'undefined' ? window.ethereum : '',
  neverminedNodeUri,
  verbose: 2,
  neverminedNodeAddress,
  graphHttpUri,
  marketplaceAuthToken: typeof window !== 'undefined' ? localStorage.getItem('marketplaceApiToken') || '' : '',
  marketplaceUri,
  artifactsFolder: `../artifacts`,
}