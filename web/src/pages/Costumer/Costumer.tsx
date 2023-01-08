import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import { CostumersTable } from '../../components/CostumersTable'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import AppContext, { ContextType } from '../../context/AppContext'
import { getToken } from '../../helpers/localStorageHelper'
import useAxios from '../../hooks/useAxios'

const getAllRequest = () => {
  const token = getToken()
  return {
    method: 'GET',
    url: 'http://localhost:3000/costumers',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
}

const Costumer: React.FC = () => {
  const { response, loading, retryRequest, newAxiosRequest } = useAxios(
    getAllRequest()
  )
  const { modalStatus, handleModalClose, handleModalOpen } = useContext(
    AppContext
  ) as ContextType
  const [allCostumers, setAllCostumers] = useState([])

  useEffect(() => {
    if (response !== undefined) {
      setAllCostumers(response)
    }
  })

  return (
    <CustomMainBox>
      <>
        <Header />
        <CostumersTable data={allCostumers as []} loading={loading} />
        <Button onClick={handleModalOpen}>Open modal</Button>
        <BasicModal />
      </>
    </CustomMainBox>
  )
}

export default Costumer
