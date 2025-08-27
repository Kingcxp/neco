import { api } from './api'
import { useToast } from 'vue-toastification'

const toast = useToast()

export interface UserEntity {
  username: string,
  group: Array<string>,
  department: Array<string>
}

export type UserStatus = "alive" | "dead" | "unknown"

export const LoginStatus = async (): Promise<string> => {
  let result: UserStatus = "unknown"
  await api
    .get(`/auth/status`)
    .then((response) => {
      result = response.data.status
      if (result == 'dead') {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
    })
  return result
}

export const authorized = async () => {
  const status = await LoginStatus()
  return !(localStorage.getItem('token') == '') && status == "alive"
}

export interface LoginEntity {
  token?: string,
  user?: UserEntity,
  error?: string
}

export const Login = async (username: string, password: string): Promise<LoginEntity | null> => {
  let result: LoginEntity | null = null
  await api
    .post(`/auth/login`, {
      username: username,
      password: password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', response.data.user)
      result = response.data as LoginEntity
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
    })
  return result
}

export const CreateUser = async (username: string, password: string): Promise<string | null> => {
  let result: string | null = null
  await api
    .post(`/auth/register`, {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.error) {
        result = response.data.error
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
      result = e
    })
  return result
}

export const GetUserInfo = async (username: string): Promise<UserEntity | null> => {
  let result: UserEntity | null = null
  await api
    .get(`/auth/user/${username}`)
    .then((response) => {
      result = response.data.user as UserEntity
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
    })
  return result
}

export const GetUserList = async (): Promise<Array<UserEntity> | null> => {
  let result: Array<UserEntity> | null = null
  await api
    .get(`/auth/userlist`)
    .then((response) => {
      result = response.data.users as Array<UserEntity>
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
    })
  return result
}

export const DeleteUser = async (username: string): Promise<string | null> => {
  let result: string | null = null
  await api
    .delete(`/auth/user/${username}`)
    .then((response) => {
      if (response.data.error) {
        result = response.data.error
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
      result = e
    })
  return result
}

export const UpdatePassword = async (username: string, password: string): Promise<string | null> => {
  let result: string | null = null
  await api
    .post(`/auth/user/${username}/password`, {
      id: username,
      new_password: password,
    })
    .then((response) => {
      if (response.data.error) {
        result = response.data.error
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
      result = e
    })
  return result
}

export const UpdateUserInfo = async (username: string, group: Array<string>, department: Array<string>): Promise<string | null> => {
  let result: string | null = null
  await api
    .patch(`/auth/user`, {
      username: username,
      group: group,
      department: department,
    })
    .then((response) => {
      if (response.data.error) {
        result = response.data.error
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
      result = e
    })
  return result
}

export const Logout = async (): Promise<string | null> => {
  let result: string | null = null
  await api
    .post(`/auth/logout`)
    .then((response) => {
      if (response.data.error) {
        result = response.data.error
      }
    })
    .catch((e) => {
      toast.error(`请求错误：${e}`)
      result = e
    })
  return result
}
