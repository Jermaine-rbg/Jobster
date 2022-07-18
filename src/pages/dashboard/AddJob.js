import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import {
  clearValues,
  handleChange,
  createJob,
  editJob,
} from '../../features/user/job/jobSlice';






const AddJob = () => {
  const {isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId} = useSelector((store)=> store.job);
  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!position || !company || !jobLocation){
      toast.error('You Left Something Out!')
      return 
    }
    if(isEditing){
      dispatch(editJob({jobId:editJobId, job:{position, company, jobLocation, jobType, status}}))
      return;
    }
    dispatch(createJob({position, company, jobLocation, jobType, status }))
  };

  const handleJobInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name, value}))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, );
  return <Wrapper>
    <form className='form'>
     <h3>{isEditing? 'edit job' : 'add job'}</h3>
     <div className="form-center">
      <FormRow type='text' name='position' value={position} handleChange={handleJobInput}/>
      <FormRow type='text' name='company' value={company} handleChange={handleJobInput}/>
      <FormRow type='text' name='jobLocation' labelText='Job Location' value={jobLocation} handleChange={handleJobInput}/>
     {/* <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} /> */}
     <FormRowSelect name="jobType" labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />

     <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} />
     <FormRowSelect name="jobType" labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />
     

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
        <button type="button" className='btn btn-block clear-btn' onClick={()=> dispatch(clearValues())}>clear</button>
        <button type="submit" className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>submit</button>
      </div>
     </div>
    </form>
  </Wrapper>
};
  
export default AddJob;
