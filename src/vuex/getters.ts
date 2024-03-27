const getters = {
  add50ToPrice: (state: any) => {
    const updatedDummyData = state.dummyData.map((item: any) => {
      const updatedPrice = item.price + 50
      return { ...item, price: updatedPrice }
    })

    return updatedDummyData
  }
}

export default getters
