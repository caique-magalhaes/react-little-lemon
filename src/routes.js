import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Reservation from "./components/Reservation/Reservation";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import BookingConfirmed from "./components/BookingConfirmed/BookingConfirmed";



export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/reservation" element={<Reservation />}/>
                <Route path="/booking-confirmed" element={<BookingConfirmed />}/>
            </Routes>
        </BrowserRouter>
    )
}