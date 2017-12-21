export default {
  sortSuspect: function (suspectList) {
    suspectList.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      return -1
    })
  }
}
