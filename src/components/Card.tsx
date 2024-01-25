import { NeverminedOptions } from '@nevermined-io/sdk'
import { useRouter } from 'next/router'
import PublishAI from './CardComponents/PublishAI'
import OtherCards from './CardComponents/OtherCards'

const Card = ({ config }: { config: NeverminedOptions }) => {
    const router = useRouter()
    const routeComponent = router.asPath    
  return (
    routeComponent === '/actions/publish-ai' ?  (
        <PublishAI config = {config} />
    ) : (
        <OtherCards config={config} />
    )
  )
}

export default Card