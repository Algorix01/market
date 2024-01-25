import { DDO } from "@nevermined-io/sdk"
import { UiLayout, UiText } from "@nevermined-io/styles"

const SingleAsset = ({ ddo }: { ddo: DDO }) => {
    return (
      <>
        <UiLayout>
          <UiText>
            Asset {ddo.id.slice(0, 10)}...:
          </UiText>
        </UiLayout>
        <UiText>
          {JSON.stringify(ddo)}
        </UiText>
      </>
    )
}

export default SingleAsset