import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for bast', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.ETHREX)
      expect(address).toEqual('0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66')
    })
  })
})
