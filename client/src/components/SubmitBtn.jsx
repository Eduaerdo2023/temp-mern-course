import { useNavigation } from 'react-router-dom'

const submitBtn = ({formBtn, saveChanges }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button 
          type="submit" 
          className={`btn btn-block ${formBtn && 'form-btn'}`} 
          disabled={isSubmitting}>{isSubmitting ? 'submitting...' :(saveChanges? 'save changes' :'submit')}
          </button>
  )
}

export default submitBtn
