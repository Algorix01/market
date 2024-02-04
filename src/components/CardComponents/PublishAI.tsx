import { Account, AssetPrice, ContractHandler, DDO, MetaData, NFTAttributes, Nevermined, NeverminedOptions, RoyaltyAttributes, RoyaltyKind, getRoyaltyAttributes, getRoyaltyScheme } from "@nevermined-io/sdk"
import { UiLayout, UiText } from "@nevermined-io/styles"
import { BigNumber, ethers } from "ethers"
import { useEffect, useState } from "react"
import PublishAsset from "./PublishAsset"
import { Connector, useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useNevermined } from "@/context/nvm-sdk-context"
import { useSdkReadiness } from "@/hooks/sdkReadiness"

const ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

const PublishAI = ({ config }: { config: NeverminedOptions }) => {
    const [account, setAccount] = useState<Account | undefined>(undefined)
    const [ddo, setDDO] = useState<DDO>({} as DDO)
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
      })
    const { disconnect } = useDisconnect()
    //const { sdk, isLoadingSDK } = useNevermined()
    //const { isSdkReady} = useSdkReadiness()
    const [sdk, setSdk] = useState<Nevermined | null>(null)
    const [isSdkReady, setIsSdkReady] = useState<boolean>(false);

    const initializeSDK = async () => {
      try {
        const neverminedInstance = await Nevermined.getInstance(config);
        console.log(neverminedInstance)
        setSdk(neverminedInstance)
        setIsSdkReady(true);
        console.log("SDK Initialized successfully");
      } catch (error) {
        console.error("Failed to initialize the SDK:", error);
        setIsSdkReady(false);
      }
    }
    useEffect(() => {        
      initializeSDK();
    }, []);

     const initializeAccount = async (address: `0x${string}` | undefined) : Promise<Account|undefined> => {
      console.log(isSdkReady)
        if (!isSdkReady || !sdk || !address ) {
          throw new Error(
            `${isSdkReady ? "SDK is not ready. " : ""}` +
            `${!sdk ? "SDK instance is not initialized. " : ""}` +
            `${!address ? "Wallet address is not available. " : ""}`            
          )
        }
        try {
          console.log(address as string)         
          //const accountObj = address as unknown as Account
          const accountObj = sdk?.accounts?.getAccount(address as string)
          return accountObj
        } catch (error) {
          console.error("Failed to fetch account from SDK:", error);
          return undefined
        }
      };
    
    const publishNFT1155 = async (
        nodeAddress: string,
        accountWallet: Account,
        metadata: MetaData,
        assetPrice: AssetPrice,
        numberEditions: bigint
    ) => {
        //if ( !sdk || !isSdkReady ) {
          //await initializeSDK()
        //}
        const nftAttributes = NFTAttributes.getNFT1155Instance({
          metadata,
          services: [{
            serviceType: 'nft-sales',
            price: assetPrice,
            nft: {
              amount: numberEditions,
              nftTransfer: true
            }
          },
          {
            serviceType: 'nft-access',
            nft: { amount: numberEditions },
          }],
          cap: BigInt(5),
          preMint: true,
          nftContractAddress: '0x1bcA156f746C6Eb8b18d61654293e2Fc5b653fF5',
          providers: [nodeAddress],
        })    
        console.log(accountWallet)      
        console.log(sdk)
        const ddo = await sdk!.nfts1155.create(nftAttributes, accountWallet)    
        console.log(ddo)
        return ddo
    }

    const loginMarketplace = async (sdk: Nevermined, account: Account) => {
        const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)
        await sdk.services.marketplace.login(clientAssertion)
      }
    
    const onPublish = async () => {
      if (!isConnected || !address) {
        console.error('Wallet is not connected or address is unavailable');
        return;
      }
        try {
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

          let assetPrice: number = 19.99   
          console.log(address)                                        
          console.log(await initializeAccount(address))
          const acc = await initializeAccount(address)
      const response = await publishNFT1155(
        config.neverminedNodeAddress!,
        acc!,
        metadata,
        //royaltyAttributes,
        assetPrice as unknown as AssetPrice,
        BigInt(1)
      )
      console.log(response)
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
                    {isConnected ? (
                        <>         
                            <p className="text-blue-700">Connected to {address}</p>                                               
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => disconnect()}>Disconnect</button>
                        </>
                    ) : (
                            <button onClick={() => connect()} className="bg-blue-500 text-white px-4 py-2 rounded-md">Connect</button>
                    )}
                    {isConnected && <PublishAsset onPublish={onPublish} />}
                    {/*{address && !ddo.id && <PublishAsset onPublish={onPublish} />}*/}
                    {/*{walletAddress && !ddo.id && <PublishAsset onPublish={onPublish} />}*/}

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

