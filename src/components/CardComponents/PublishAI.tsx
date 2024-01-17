import { Account, AssetPrice, DDO, MetaData, NFTAttributes, Nevermined, NeverminedOptions, RoyaltyAttributes, RoyaltyKind, getRoyaltyScheme } from "@nevermined-io/catalog"
import { UiLayout, UiText } from "@nevermined-io/styles"
import { BigNumber, ethers } from "ethers"
import { useEffect, useState } from "react"
import PublishAsset from "./PublishAsset"

const ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

const PublishAI = ({ config }: { config: NeverminedOptions }) => {
    const [walletAddress, setWalletAddress] = useState('')
    const [account, setAccount] = useState<Account>(undefined as unknown as Account)
    const [ddo, setDDO] = useState<DDO>({} as DDO)
    const [sdk, setSdk] = useState<Nevermined>({} as Nevermined)

    const loginMetamask = async () => {
        try {            
            const response = await (window as any)?.ethereum?.request?.({
                method: 'eth_requestAccounts',
            }) as string[] | undefined;
            if (response && response.length > 0) {
                setWalletAddress(ethers.utils.getAddress(response[0]));
            }
        } catch (error) {
            console.error('Error connecting to Metamask:', error);
        }        
    }

    useEffect(() => {    
        ;(window as any)?.ethereum?.on('accountsChanged', (newAccount: string[]) => {
          if (newAccount && newAccount.length > 0) {
            setWalletAddress(ethers.utils.getAddress(newAccount[0]))
          } else {
            setWalletAddress('')
            console.log('No Account found!')
          }
        })
    
        ;(async () => {
          const provider = new ethers.providers.Web3Provider((window as any).ethereum)
          const accounts = await provider.listAccounts()
          setWalletAddress(accounts?.length ? ethers.utils.getAddress(accounts[0]) : '')
        })()
    }, [])

    useEffect(() => {
        if (walletAddress) {
          ;(async () => {
            try {
              const nvm = await Nevermined.getInstance(config)              
              const accounts = await nvm.accounts.list()
    
              setAccount(accounts[0])
              setSdk(nvm)
            } catch (error) {
              console.log(error)
            }
          })()
        }
    }, [walletAddress])

    const publishNFT1155 = async (
        nodeAddress: string,
        accountWallet: Account,
        metadata: MetaData,
        //royaltyAttributes: RoyaltyAttributes,
        assetPrice: AssetPrice,
    ) => {
        const nftAttributes = NFTAttributes.getNFT1155Instance({
          metadata,
          serviceTypes: ['nft-sales', 'nft-access'],
          amount: BigNumber.from(1),
          cap: BigNumber.from(100),
          //royaltyAttributes,
          preMint: true,
          nftContractAddress: sdk.nfts1155.nftContract.address,
          providers: [nodeAddress],
          price: assetPrice,
        })    
        const ddo = await sdk.nfts1155.create(nftAttributes, accountWallet)    
        return ddo
    }

    const loginMarketplace = async (sdk: Nevermined, account: Account) => {
        const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)
        await sdk.services.marketplace.login(clientAssertion)
      }

    const onPublish = async () => {
        try {
            const assetPriceMap = new Map([[account.getId(), BigNumber.from(1)]])    
            const assetPrice = new AssetPrice(assetPriceMap)
            /*const royaltyAttributes = {
                royaltyKind: RoyaltyKind.Standard,  
                scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
                amount: 0,
            }*/    
            const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
            console.log(networkFee)
            const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()    
            assetPrice.addNetworkFees(feeReceiver, BigNumber.from(networkFee))
            assetPrice.setTokenAddress(ERC_TOKEN)
    
            const metadata: MetaData = {
                main: {
                    name: '',
                    files: [
                    {
                        index: 0,
                        contentType: 'application/json',
                        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg',
                    },
              ],
              type: 'dataset',
              author: '',
              license: '',
              dateCreated: new Date().toISOString(),
            },
          }
          await loginMarketplace(sdk, account)

      const response = await publishNFT1155(
        config.neverminedNodeAddress!,
        account,
        metadata,
        //royaltyAttributes,
        assetPrice,
      )

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }
    

    return (
        <div className="flex mx-auto bg-white rounded-md shadow-lg">       
            <div className="p-6">
                <div className="mb-4">                
                    <h2 className="text-xl font-bold mb-2">Description</h2>
                    <p className="text-gray-700">"Utilizing NFT subscriptions to publish AI models on decentralized compute networks represents a groundbreaking fusion of blockchain technology and artificial intelligence. This innovative approach not only democratizes access to advanced AI capabilities but also ensures secure, transparent, and equitable distribution of computational resources and intellectual property rights."</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Pricing</h2>
                    <p className="text-gray-700">$19.99</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Duration</h2>
                    <p className="text-gray-700">1 month</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Model</h2>
                    <p className="text-gray-700">Experimental AI Model</p>
                </div>
    
                <div className="flex justify-between">                         
                    <UiLayout>
                    {account ? (
                        <>
                            <button className="bg-blue-300 text-white px-4 py-2 rounded-md">Connected &nbsp;
                                <UiText>{account.getId()}</UiText>
                            </button>                            
                        </>
                    ) : (
                            <button onClick={loginMetamask} className="bg-blue-500 text-white px-4 py-2 rounded-md">Connect</button>
                    )}

                    {walletAddress && !ddo.id && <PublishAsset onPublish={onPublish} />}

                    {/*{ddo?.id && (
                        <>
                            <SingleAsset ddo={ddo} />
                            <BuyAsset ddo={ddo} sdk={sdk} account={account} />
                        </>
                    )}*/}
                </UiLayout>        
                </div>
            </div>        
        </div>
    )
}

export default PublishAI

