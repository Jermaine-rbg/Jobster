import { useEffect } from 'react';
import { StatsContainer,  ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';


const Stats = () => {

  const {monthlyApplications} = useSelector((store) => store.alljobs)
  const dispatch = useDispatch()
  useEffect(() =>{
     dispatch(showStats) 
  }, )
  return (
  <>
  <StatsContainer/>
  {monthlyApplications.length > 0 && <ChartsContainer/>}
  </>
  )
}; 

export default Stats;