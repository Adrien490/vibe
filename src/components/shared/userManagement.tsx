import React from 'react'
import { api } from '~/utils/api'

export const userManagement = () => {

  const {data: users, isFetching} = api.user.getAll.useQuery()
    

  return (
    <div>userManagement</div>
  )
}
