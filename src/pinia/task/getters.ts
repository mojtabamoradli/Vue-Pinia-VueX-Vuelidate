const getters = {
  favs: (state: any) => {
    return state.tasks.filter((item: any) => item.isFav)
  }
}

export default getters
