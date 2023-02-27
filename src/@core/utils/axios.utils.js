import getApi from 'src/lib/axios'

export const createUser = async req => {
  const inst = await getApi()

  return inst.post('user/create', req)
}

export const loginUser = async req => {
  const inst = await getApi()

  return inst.post('user/login', req)
}

export const forgetPass = async req => {
  const inst = await getApi()

  return inst.post('user/forgot-password', req)

}

// whats more important 