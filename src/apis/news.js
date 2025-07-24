import axios from '@/utils/authorizeAxios'

// const listNewsData = {
//   lang: 'vn',
//   loai: 6,
//   menuid: '71',
//   soitem: '3',
//   sotrang: '1'
// }

// const detailNewsData = {
//   lang: 'vn',
//   loai: 62,
//   postid: '999'
// }

export const getNews = async (data) => {
  const res = await axios.post('/store/StoredProcedure', data)
  return res.data
}
