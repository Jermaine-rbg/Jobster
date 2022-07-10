import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddJob = () => {
  const {isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId} = useSelector((store)=> store.job);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!position || !company || !jobLocation){
      toast.error('You Left Something Out!')
      return 
    }
  }

  const handleJobInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  }
  return <Wrapper>
    <form className='form'>
     <h3>{isEditing? 'edit job' : 'add job'}</h3>
     <div className="form-center">
      <FormRow type='text' name='position' value={position} handleChange={handleJobInput}/>
      <FormRow type='text' name='company' value={company} handleChange={handleJobInput}/>
      <FormRow type='text' name='jobLocation' labelText='Job Location' value={jobLocation} handleChange={handleJobInput}/>

      <div className="form-row">
        <label htmlFor="status" className='form-label'>
         status
        </label>
        <select name="status" id="status"
          value={status}
          onChange={handleJobInput} 
          className='form-select'>
         {statusOptions.map((itemValue, index)=> {
          return <option key={index} value={itemValue}>
            {itemValue}
          </option>
         })}
        </select>
      </div>

      <div className="btn-container">
        <button type="button" className='btn btn-block clear-btn' onClick={()=>console.log('clear values')}>clear</button>
        <button type="submit" className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>submit</button>
      </div>
     </div>
    </form>
  </Wrapper>
};

export default AddJob;
