import axios from '@/utils/authorizeAxios'

// API giới thiệu của app Ngoạn Thạch Việt
export const getIntroduction = async (data) => {
  const res = await axios.post('/Articles/GetAll', data)
  return res.data
}

export const getDetailIntroduction = async (data) => {
  const res = await axios.post('/Articles/Detail', data)
  return res.data
}
