const mutations = {
  reducePrice: (state: any, payload: any) => {
    state.dummyData.forEach((item: any) => {
      item.price = item.price - payload
    })
  }
}

export default mutations
