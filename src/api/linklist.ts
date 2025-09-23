import { api } from './api'

export interface LinkEntity {
  name: string
  image: string
  url: string
  description: string
}

export const GetLinkList = async (): Promise<LinkEntity[]> => {
  let result: LinkEntity[] = []
  await api
    .get('/link')
    .then((res) => {
      result = res.data as LinkEntity[]
    })
    .catch(() => {})
  return result
}

export const AddLink = async (link: LinkEntity): Promise<string | null> => {
  let result: string | null = null
  await api
    .post('/link', link)
    .then((res) => {
      if (res.data.error) {
        result = res.data.error as string
      }
    })
    .catch((err) => {
      if (err.response && err.response.data.error) {
        result = err.response.data.error as string
      }
    })
  return result
}

export const UpdateLink = async (link: LinkEntity): Promise<string | null> => {
  let result: string | null = null
  await api
    .patch('/link', link)
    .then((res) => {
      if (res.data.error) {
        result = res.data.error as string
      }
    })
    .catch((err) => {
      if (err.response && err.response.data.error) {
        result = err.response.data.error as string
      }
    })
  return result
}

export const DeleteLink = async (name: string): Promise<string | null> => {
  let result: string | null = null
  await api
    .delete(`/link/${name}`)
    .then((res) => {
      if (res.data.error) {
        result = res.data.error as string
      }
    })
    .catch((err) => {
      if (err.response && err.response.data.error) {
        result = err.response.data.error as string
      }
    })
  return result
}
