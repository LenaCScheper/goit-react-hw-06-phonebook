import { useSelector, useDispatch } from 'react-redux';
import { getfilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter () {

    const value = useSelector(getfilter);
    const dispach = useDispatch();
    const change = e => dispatch(actions.changeFilter(e.target.value));
    return (
        <label className={ s.label}>
        Name filter <input type="text" value={value} onChange={onChange} />
    </label>
    )

}
    


