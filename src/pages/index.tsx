import { Loader } from '@components/loader'
import Page from '@components/page'
import {Campaigns} from '../components/camps'
import { useShallowEqualSelector } from '@hooks/redux-typed-hooks'

const Pages = () => {
  const { loading } = useShallowEqualSelector(s => s.campaigns)


  return (
    <Page title="Home">
      <Loader loading={loading}>{Campaigns}</Loader>
    </Page>
  )
}

export default Pages
