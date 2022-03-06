import { Route, Routes } from 'react-router-dom';
import CheckOutPage from '../pages/CheckOutPage';
import StorePage from '../pages/StorePage';


export default function CustomRouters(props: any) {
    return(
        <Routes>
            <Route path="/" element={<StorePage passParams={props.passParams}/>} />
            <Route path="/checkout" element={<CheckOutPage passParams={props.passParams}/>} />
        </Routes>
    );
}
