import { Form, useSubmit, Link } from 'react-router-dom'
import { FormRow, FormRowSelect } from '.'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants'
import { useAllJobsContext } from '../pages/AllJob'


const SearchContainer = () => {
  const { searchValues } = useAllJobsContext()

  const { search, jobStatus, jobType, sort } = searchValues
  const submit = useSubmit()

  const debounce = (onChange) => {
    let timeout
    return (e) => {
      const form = e.currentTarget.form
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        onChange(form)
      }, 2000)
    }
  }

  return (
    <Wrapper >
      <form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className="form-center">
          <FormRow
            type='search'
            name='search'
            defaultValue=''
            onChange={debounce((form) => {
              submit(form)
            })}
          />

          <FormRowSelect
            labeText='job status'
            name='jobStatus'
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue='all'
            onChange={(e) => {
              submit(e.currentTarget.form)
            }} />
          <FormRowSelect
            labeText='job type'
            name='jobType'
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue='all'
            onChange={(e) => {
              submit(e.currentTarget.form)
            }} />
          <FormRowSelect
            name='sort'
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue='newest'
            onChange={(e) => {
              submit(e.currentTarget.form)
            }} />

          <Link to='/dashboard/all-jobs'
            className='btn form-btn delete-btn' >Reset search values</Link>

        </div>

      </form>
    </Wrapper>
  )
}

export default SearchContainer
