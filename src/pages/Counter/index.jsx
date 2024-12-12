import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../../store/counter';


export const Counter = ()=>{

	const count = useSelector((store)=>store.count)
	const dispatch = useDispatch()

	return(
		<div>
			<h1 className='text-red-950'>{count.value}</h1>
			<div>
			<button onClick={()=>dispatch(increment())}>increment</button>
			<br />
      <button onClick={()=>dispatch(decrement())}>decrement</button>
			</div>
		</div>
	)
}