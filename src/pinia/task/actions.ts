const actions = {
  addTask(payload: any) {
    this.tasks.push(payload)
  },
  async getTasks() {
    const response = await fetch('something')
    const data = await response.json()

    this.tasks = data
  }
}

export default actions
