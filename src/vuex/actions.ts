const actions = {
  reducePriceByDelay: (context: any, payload: any) => {
    setTimeout(() => {
      context.commit('reducePrice', payload)
    }, 3000)
  }
}

export default actions
