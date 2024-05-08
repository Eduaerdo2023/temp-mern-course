import { createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { JobsContainer, SearchContainer } from '../components'


export const loader = async ({ request }) => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
 
  try {
    const { data } = await customFetch.get('/jobs', { params })
    return { data, searchValues: { ...params } }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AllJobsContext = createContext()
const AllJob = () => {
  const { data, searchValues } = useLoaderData()

  return (
    <AllJobsContext.Provider value={{ data, searchValues }} >
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  )
}
export const useAllJobsContext = () => useContext(AllJobsContext)

export default AllJob

